import React, { useEffect, useMemo, useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { getColumns } from "./columns"
import { DataTableToolbar } from "./data-table-toolbar"
import { cn } from "@/lib/utils"
import { useAuthStore } from "../../store/useAuthStore"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { usePlaylistStore } from "@/store/usePlaylistStore"
import toast from "react-hot-toast"

export default function ProblemsTable({ problems }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnFilters, setColumnFilters] = useState([])
  const [sorting, setSorting] = useState([])
  const [showPlaylistModal, setShowPlaylistModal] = useState(false)
  const [selectedProblemId, setSelectedProblemId] = useState(null)
  const [selectedPlaylists, setSelectedPlaylists] = useState([])

  const { authUser } = useAuthStore()
  const { playlists, getAllPlaylists, addProblemToPlaylist } = usePlaylistStore()

  useEffect(() => {
    getAllPlaylists();
  }, [getAllPlaylists]);

  const fetchProblems = async () => {
    setLoading(true)
    try {
      const problemsWithSolved = problems
        ?.map((p) => ({
          ...p,
          solved: p.solvedBy?.some((s) => s.userId === authUser?.id) ?? false,
        }))
        .sort((a, b) => {
          const hasDemoTagA = a.tags?.includes("demo");
          const hasDemoTagB = b.tags?.includes("demo");
          if (hasDemoTagA === hasDemoTagB) return 0;
          return hasDemoTagA ? -1 : 1;
        });

      setData(problemsWithSolved)
    } catch (err) {
      console.error("Error fetching problems", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProblems()
  }, [])

  // const handleSolvedChange = (id, solved) => {
  //   setData((prev) =>
  //     prev.map((p) => (p.id === id ? { ...p, solved } : p))
  //   )
  // }

  const handleSaveToPlaylist = (problemId) => {
    setSelectedProblemId(problemId);
    setSelectedPlaylists([]);
    setShowPlaylistModal(true); // 👉 Just open the modal
  };

  const handleConfirmSave = async () => {
    if (!selectedPlaylists.length) {
      toast.error("Please select at least one playlist.");
      return;
    }

    try {
      for (const playlistId of selectedPlaylists) {
        await addProblemToPlaylist(playlistId, [selectedProblemId]);
      }

      toast.success("Problem added to playlist(s)");
      setShowPlaylistModal(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add problem to playlist");
    }
  };


  const handlePlaylistToggle = (playlistId) => {
    setSelectedPlaylists((prev) =>
      prev.includes(playlistId)
        ? prev.filter((id) => id !== playlistId)
        : [...prev, playlistId]
    )
  }

  const columns = useMemo(() => getColumns(authUser, handleSaveToPlaylist), [authUser])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="space-y-4 w-full z-10">
      <DataTableToolbar table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-900/80">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const meta = header.column.columnDef.meta
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan} className={`p-3.5 ${cn(meta?.className)}`}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className={
                  row.original?.tags?.includes("demo")
                    ? "dark:border-solid dark:border-2 dark:border-primary/70"
                    : ""
                }>
                  {row.getVisibleCells().map((cell) => {
                    const meta = cell.column.columnDef.meta
                    return (
                      <TableCell key={cell.id} className={cn(meta?.className) + " capitalize"}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                    <TableCell colSpan={columns.length} className="text-center h-24">
                      No problems found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground"></div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>

      <Dialog open={showPlaylistModal} onOpenChange={setShowPlaylistModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Playlists</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`playlist-${playlist.id}`}
                  checked={selectedPlaylists.includes(playlist.id)}
                  onCheckedChange={() => handlePlaylistToggle(playlist.id)}
                />
                <label htmlFor={`playlist-${playlist.id}`} className="text-sm">
                  {playlist.name}
                </label>
              </div>
            ))}
            <Button className="mt-4 w-full" onClick={handleConfirmSave}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
