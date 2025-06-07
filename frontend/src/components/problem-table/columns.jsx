// Removed "use client"
import { Edit, Trash2, ListPlus, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TooltipProvider } from "@/components/ui/tooltip" // Ensure Tooltip components are imported
import { DataTableColumnHeader } from "./data-table-column-header"
import { Link } from "react-router-dom"

export const getColumns = (authUser, onSaveToPlaylist) => [
  {
    id: "solved",
    accessorKey: "solved",
    header: ({ table }) => (
      <div className="flex items-center justify-center">Solved</div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.original.solved}
          readOnly
          className="pointer-events-none translate-y-[2px]"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "w-[60px] text-center",
    },
  }
  ,
  {
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => {
      const id = row.original.id
      const title = row.getValue("title")
      return (
        <Link
          to={`/problem/${id}`}
          className="max-w-[300px] truncate font-medium hover:underline text-primary"
        >
          {title}
        </Link>
      )
    },
    meta: {
      className: "min-w-[200px]",
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.getValue("tags")
      return (
        <div className="flex flex-wrap gap-1 max-w-[250px]">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      const tags = row.getValue(id)?.map((t) => t.toLowerCase()) || []
      return (
        value.length === 0 ||
        value.some((filterTag) => tags.includes(filterTag.toLowerCase()))
      )
    },
    meta: {
      className: "min-w-[150px]",
    },
  },
  {
    accessorKey: "companies",
    header: "Companies",
    cell: ({ row }) => {
      const companies = row.getValue("companies")
      return (
        <div className="flex flex-wrap gap-1 max-w-[250px]">
          {companies.map((company) => (
            <Badge
              key={company}
              variant="outline"
              className="border-sky-500 text-sky-600 dark:text-sky-400 dark:border-sky-700"
            >
              {company}
            </Badge>
          ))}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      const companies = row.getValue(id)?.map((c) => c.toLowerCase()) || []
      return (
        value.length === 0 ||
        value.some((filterCompany) => companies.includes(filterCompany.toLowerCase()))
      )
    },
    meta: {
      className: "min-w-[150px]",
    },
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Difficulty" />,
    cell: ({ row }) => {
      const difficulty = row.getValue("difficulty")
      let colorClass = ""
      switch (difficulty) {
        case "Easy":
          colorClass = "text-green-600 dark:text-green-400"
          break
        case "Medium":
          colorClass = "text-yellow-600 dark:text-yellow-400"
          break
        case "Hard":
          colorClass = "text-red-600 dark:text-red-400"
          break
        default:
          colorClass = ""
      }
      return <div className={`font-medium ${colorClass}`}>{difficulty}</div>
    },
    filterFn: (row, id, value) => {
      return (
        value.length === 0 ||
        value.includes(row.getValue(id).toLowerCase())
      )
    },
    meta: {
      className: "w-[100px]",
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const problem = row.original
      return (
        <TooltipProvider delayDuration={100}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => alert(`Editing: ${problem.title}`)}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => alert(`Deleting: ${problem.title}`)}
                className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:text-red-400 dark:focus:text-red-400 dark:focus:bg-red-900/50"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onSaveToPlaylist(problem.id)}>
                <ListPlus className="mr-2 h-4 w-4" />
                Save to Playlist
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipProvider>
      )
    },
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "w-[80px] text-center",
    },
  },
]
