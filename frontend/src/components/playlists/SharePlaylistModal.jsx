import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from "lucide-react"
import { currentUserId } from "@/data/playlist-mock-data"

export function SharePlaylistModal({ isOpen, onClose, playlist, onShareWithUser, onRevokeUserAccess, allUsers }) {
  const [userIdToShare, setUserIdToShare] = useState("")

  const handleShare = () => {
    if (!userIdToShare.trim()) {
      alert("Please enter a User ID to share with.")
      return
    }
    // In a real app, you'd validate the user ID and find the user object.
    // For this mock, we'll assume the ID is valid and try to find the user.
    const userToShareWith = allUsers.find(
      (u) => u.id === userIdToShare.trim() || u.name.toLowerCase().includes(userIdToShare.trim().toLowerCase()),
    )

    if (!userToShareWith) {
      alert(`User with ID or name containing "${userIdToShare}" not found.`)
      return
    }
    if (userToShareWith.id === currentUserId) {
      alert("You cannot share a playlist with yourself.")
      return
    }
    if (playlist.sharedWith.find((u) => u.id === userToShareWith.id)) {
      alert(`${userToShareWith.name} already has access to this playlist.`)
      setUserIdToShare("")
      return
    }

    onShareWithUser(userToShareWith)
    setUserIdToShare("") // Clear input after sharing
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-neutral-800 border-neutral-700 text-foreground">
        <DialogHeader>
          <DialogTitle>Share Playlist: {playlist?.name}</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Users with Access ({playlist?.sharedWith?.length || 0})</h4>
            <ScrollArea className="h-[150px] border border-neutral-700 rounded-md p-2">
              {playlist?.sharedWith?.length > 0 ? (
                playlist.sharedWith.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-2 hover:bg-neutral-700/50 rounded">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-7 w-7">
                        <AvatarImage src={user.avatarUrl || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="text-xs">{user.name.substring(0, 1)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">
                        {user.name} {user.id === currentUserId ? "(You)" : ""}
                      </span>
                    </div>
                    {user.id !== currentUserId &&
                      playlist.ownerId === currentUserId && ( // Only owner can revoke, and not themselves
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRevokeUserAccess(user.id)}
                          className="text-xs text-red-500 hover:text-red-400 hover:bg-red-500/10 px-2 py-1 h-auto"
                        >
                          <X className="h-3 w-3 mr-1" /> Revoke
                        </Button>
                      )}
                  </div>
                ))
              ) : (
                <p className="text-center text-sm text-muted-foreground py-4">Not shared with anyone yet.</p>
              )}
            </ScrollArea>
          </div>
          {playlist?.ownerId === currentUserId && ( // Only owner can share further
            <div>
              <h4 className="text-sm font-medium mb-2">Share with New User</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter User ID or Name"
                  value={userIdToShare}
                  onChange={(e) => setUserIdToShare(e.target.value)}
                  className="bg-neutral-700 border-neutral-600 focus:border-blue-500"
                />
                <Button onClick={handleShare} className="bg-blue-600 hover:bg-blue-700">
                  Share
                </Button>
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" className="border-neutral-600 hover:bg-neutral-700">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
