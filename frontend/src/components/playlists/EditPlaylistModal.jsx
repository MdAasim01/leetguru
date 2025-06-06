import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function EditPlaylistModal({ isOpen, onClose, playlist, onSubmit }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    setName(playlist.name || "")
    setDescription(playlist.description || "")
  }, [playlist])

  const handleSave = () => {
    if (!name.trim()) return alert("Name is required")
    onSubmit({ name, description })
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-neutral-800 border-neutral-700 text-foreground">
        <DialogHeader>
          <DialogTitle>Edit Playlist</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <Input
            placeholder="Playlist Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-neutral-700 border-neutral-600"
          />
          <Textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-neutral-700 border-neutral-600 min-h-[80px]"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="border-neutral-600">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
