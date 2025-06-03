import { useState, useMemo } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export function CreatePlaylistModal({ isOpen, onClose, onCreatePlaylist, allProblems }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProblemIds, setSelectedProblemIds] = useState([])

  const availableProblems = useMemo(() => {
    return allProblems.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [allProblems, searchTerm])

  const handleToggleProblem = (problemId) => {
    setSelectedProblemIds((prev) =>
      prev.includes(problemId) ? prev.filter((id) => id !== problemId) : [...prev, problemId],
    )
  }

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Playlist name is required.")
      return
    }
    const problemsForPlaylist = allProblems.filter((p) => selectedProblemIds.includes(p.id))
    onCreatePlaylist({ name, description, problems: problemsForPlaylist })
    // Reset form
    setName("")
    setDescription("")
    setSelectedProblemIds([])
    setSearchTerm("")
    onClose()
  }

  const handleClose = () => {
    setName("")
    setDescription("")
    setSelectedProblemIds([])
    setSearchTerm("")
    onClose()
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) handleClose()
      }}
    >
      <DialogContent className="sm:max-w-[650px] bg-neutral-800 border-neutral-700 text-foreground">
        <DialogHeader>
          <DialogTitle>Create New Playlist</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <Input
            placeholder="Playlist Name (e.g., Dynamic Programming Basics)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-neutral-700 border-neutral-600 focus:border-blue-500"
          />
          <Textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-neutral-700 border-neutral-600 focus:border-blue-500 min-h-[80px]"
          />
          <div>
            <h4 className="text-sm font-medium mb-2">Add Problems (optional)</h4>
            <div className="relative mb-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search problems to add..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 bg-neutral-700 border-neutral-600 focus:border-blue-500"
              />
            </div>
            <ScrollArea className="h-[200px] border border-neutral-700 rounded-md p-2">
              {availableProblems.length > 0 ? (
                availableProblems.map((problem) => (
                  <div
                    key={problem.id}
                    className="flex items-center justify-between p-2 hover:bg-neutral-700/50 rounded"
                  >
                    <div>
                      <label htmlFor={`create-problem-${problem.id}`} className="font-medium cursor-pointer">
                        {problem.title}
                      </label>
                      <div className="text-xs text-muted-foreground">
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
                          className="mr-1 text-xs"
                        >
                          {problem.difficulty}
                        </Badge>
                        {problem.tags?.slice(0, 2).join(", ")}
                      </div>
                    </div>
                    <Checkbox
                      id={`create-problem-${problem.id}`}
                      checked={selectedProblemIds.includes(problem.id)}
                      onCheckedChange={() => handleToggleProblem(problem.id)}
                      className="border-neutral-600 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground py-4">No problems match your search.</p>
              )}
            </ScrollArea>
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="border-neutral-600 hover:bg-neutral-700"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
            Create Playlist
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
