// Removed "use client"
import { X, ListFilter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { uniqueTags, uniqueCompanies, difficulties } from "@/data/problem-data" // Updated import path

export function DataTableToolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0

  const selectedTags = table.getColumn("tags")?.getFilterValue() || []
  const selectedCompanies = table.getColumn("companies")?.getFilterValue() || []
  const selectedDifficulty = (table.getColumn("difficulty")?.getFilterValue() || [])[0]

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-1 items-center space-x-2 flex-wrap gap-y-2">
        <Input
          placeholder="Search problems..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
          className="h-10 w-full sm:w-[150px] lg:w-[250px]"
        />

        {/* Tags Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-10">
              <ListFilter className="mr-2 h-4 w-4" />
              Tags
              {selectedTags.length > 0 && (
                <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                  {selectedTags.length}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuLabel>Filter by Tags</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {uniqueTags.map((tag) => (
              <DropdownMenuCheckboxItem
                key={tag}
                checked={selectedTags.includes(tag)}
                onCheckedChange={(checked) => {
                  const currentTags = selectedTags
                  const newTags = checked ? [...currentTags, tag] : currentTags.filter((t) => t !== tag)
                  table.getColumn("tags")?.setFilterValue(newTags.length > 0 ? newTags : undefined)
                }}
              >
                {tag}
              </DropdownMenuCheckboxItem>
            ))}
            {selectedTags.length > 0 && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  key="clearTags"
                  className="justify-center text-xs"
                  checked={false}
                  onCheckedChange={() => table.getColumn("tags")?.setFilterValue(undefined)}
                >
                  Clear filters
                </DropdownMenuCheckboxItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Companies Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-10">
              <ListFilter className="mr-2 h-4 w-4" />
              Companies
              {selectedCompanies.length > 0 && (
                <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                  {selectedCompanies.length}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuLabel>Filter by Companies</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {uniqueCompanies.map((company) => (
              <DropdownMenuCheckboxItem
                key={company}
                checked={selectedCompanies.includes(company)}
                onCheckedChange={(checked) => {
                  const currentCompanies = selectedCompanies
                  const newCompanies = checked
                    ? [...currentCompanies, company]
                    : currentCompanies.filter((c) => c !== company)
                  table.getColumn("companies")?.setFilterValue(newCompanies.length > 0 ? newCompanies : undefined)
                }}
              >
                {company}
              </DropdownMenuCheckboxItem>
            ))}
            {selectedCompanies.length > 0 && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  key="clearCompanies"
                  className="justify-center text-xs"
                  checked={false}
                  onCheckedChange={() => table.getColumn("companies")?.setFilterValue(undefined)}
                >
                  Clear filters
                </DropdownMenuCheckboxItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Difficulty Filter */}
        <Select
          value={selectedDifficulty ?? "all"}
          onValueChange={(value) => {
            table.getColumn("difficulty")?.setFilterValue(value && value !== "all" ? [value] : undefined)
          }}
        >
          <SelectTrigger className="h-10 w-full sm:w-[150px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            {difficulties.map((difficulty) => (
              <SelectItem key={difficulty} value={difficulty}>
                {difficulty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-10 px-2 lg:px-3">
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Column Visibility Toggle */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto h-10">
            Columns <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {/* Display a more user-friendly name if id is not suitable */}
                  {column.id === "solved" ? "Status" : column.id.replace(/_/g, " ")}
                </DropdownMenuCheckboxItem>
              )
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
