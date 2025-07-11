import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusCircle, Trash2, Share2, MoreVertical, Eye, Edit3 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import { usePlaylistStore } from "@/store/usePlaylistStore"
import { useState } from "react"
import { EditPlaylistModal } from "./EditPlaylistModal"

export function PlaylistCard({
  playlist,
  isOwner,
  onAddProblems,
  onRemoveProblem,
  onDeletePlaylist,
  onSharePlaylist,
}) {
  const nestedProblems = playlist.problems?.map((p) => p.problem) || []

  const [showEditModal, setShowEditModal] = useState(false)
  const { updatePlaylistDetails } = usePlaylistStore()

  const handleUpdate = async (updates) => {
    await updatePlaylistDetails(playlist.id, updates)
    setShowEditModal(false)
  }

  return (
    <Card className=" bg-gray-900/80 border-gray-800 text-foreground flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-1">{playlist.name}</CardTitle>
            <CardDescription className="text-xs text-neutral-400 h-8 overflow-hidden">
              {playlist.description || "No description."}
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-neutral-400 hover:text-white hover:bg-neutral-700"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-neutral-700 shadow-2xs border-neutral-600 text-neutral-200">
              {isOwner && (
                <>
                  <DropdownMenuItem
                    onClick={() => setShowEditModal(true)}
                    className="hover:!bg-neutral-600 focus:!bg-neutral-600"
                  >
                    <Edit3 className="mr-2 h-4 w-4" /> Edit Details
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onAddProblems} className="hover:!bg-neutral-600 focus:!bg-neutral-600">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Problems
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onSharePlaylist} className="hover:!bg-neutral-600 focus:!bg-neutral-600">
                    <Share2 className="mr-2 h-4 w-4" /> Share / Manage Access
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-neutral-600" />
                  <DropdownMenuItem
                    onClick={onDeletePlaylist}
                    className="text-red-400 hover:!bg-red-500/20 focus:!bg-red-500/20 hover:!text-red-300 focus:!text-red-300"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete Playlist
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="flex-grow overflow-hidden py-0">
        <p className="text-xs text-neutral-500 mb-1">Problems ({nestedProblems.length})</p>
        <ScrollArea className="h-[180px] border border-neutral-700 rounded-md">
          {nestedProblems.length > 0 ? (
            <Table className="text-xs">
              <TableHeader>
                <TableRow className="border-neutral-700 hover:bg-transparent">
                  <TableHead className="text-neutral-400 h-8 px-2 py-1">Title</TableHead>
                  <TableHead className="text-neutral-400 h-8 px-2 py-1">Difficulty</TableHead>
                  {isOwner && <TableHead className="text-right text-neutral-400 h-8 px-2 py-1"> </TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {nestedProblems.map((problem) => (
                  <TableRow key={problem.id} className="border-neutral-700 hover:bg-neutral-700/30">
                    <TableCell className="max-w-[150px] p-0">
                      <Link to={`/problem/${problem.id}`} className="font-medium py-2.5 px-2 truncate">
                        {problem.title}
                      </Link>
                    </TableCell>
                    <TableCell className="py-1.5 px-2">
                      <Badge
                        variant={
                          problem.difficulty === "Easy"
                            ? "success"
                            : problem.difficulty === "Medium"
                              ? "warning"
                              : problem.difficulty === "Hard"
                                ? "destructive"
                                : "secondary"
                        }
                        className="text-[10px] px-1 py-0.5"
                      >
                        {problem.difficulty}
                      </Badge>
                    </TableCell>
                    {isOwner && (
                      <TableCell className="text-right py-1.5 px-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemoveProblem(playlist.id, problem.id)}
                          className="h-6 w-6 text-red-500 hover:text-red-400 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-neutral-500">No problems yet.</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>

      <CardFooter className="pt-3 pb-3 text-xs text-neutral-500">
        {isOwner
          ? "You own this playlist."
          : `Shared by ${playlist.sharedWith?.find((u) => u.id === playlist.userId)?.name || "another user"}.`}
      </CardFooter>
      {showEditModal && (
        <EditPlaylistModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          playlist={playlist}
          onSubmit={handleUpdate}
        />
      )}
    </Card>
  )
}

