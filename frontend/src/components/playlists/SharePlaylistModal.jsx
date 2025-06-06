import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from "lucide-react"
import { usePlaylistStore } from "@/store/usePlaylistStore"
import { useAuthStore } from "@/store/useAuthStore" // ✅ NEW

export function SharePlaylistModal({ isOpen, onClose, playlist }) {
  const [userIdToShare, setUserIdToShare] = useState("")
  const [sharedUsers, setSharedUsers] = useState([])
  const [error, setError] = useState("")

  const { authUser } = useAuthStore() // ✅ Use authUser.id
  const {
    grantAccessToPlaylist,
    revokeAccessFromPlaylist,
    getPlaylistAccessList,
  } = usePlaylistStore()

  const isOwner = playlist?.userId === authUser?.id

  const refreshAccessList = async () => {
    try {
      if (playlist?.id) {
        const users = await getPlaylistAccessList(playlist.id)
        setSharedUsers(users)
      }
    } catch (err) {
      console.error("Failed to fetch access list:", err)
    }
  }

  useEffect(() => {
    if (isOpen) refreshAccessList()
  }, [isOpen, playlist?.id])

  const handleShare = async () => {
    setError("")
    const trimmedId = userIdToShare.trim()

    if (!trimmedId) {
      setError("Please enter a user ID.")
      return
    }

    if (trimmedId === authUser.id) {
      setError("You cannot share a playlist with yourself.")
      return
    }

    if (sharedUsers.some((u) => u.id === trimmedId)) {
      setError("This user already has access.")
      return
    }

    try {
      await grantAccessToPlaylist(playlist.id, trimmedId)
      await refreshAccessList()
      setUserIdToShare("")
    } catch (err) {
      console.error(err)
      setError("User not found or unable to share.")
    }
  }

  const handleRevoke = async (userId) => {
    try {
      await revokeAccessFromPlaylist(playlist.id, userId)
      await refreshAccessList()
    } catch (err) {
      console.error(err)
      setError("Failed to revoke access.")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-neutral-800 border-neutral-700 text-foreground">
        <DialogHeader>
          <DialogTitle>Share Playlist: {playlist?.name}</DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-4">
          {/* Shared Users */}
          {sharedUsers.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Users with Access ({sharedUsers.length})</h4>
              <ScrollArea className="h-[150px] border border-neutral-700 rounded-md p-2">
                {sharedUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-2 hover:bg-neutral-700/50 rounded"
                  >
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-7 w-7">
                        <AvatarImage src={user.avatarUrl || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="text-xs">{user.name?.[0] || "U"}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">
                        {user.name} {user.id === authUser.id ? "(You)" : ""}
                      </span>
                    </div>
                    {user.id !== authUser.id && isOwner && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRevoke(user.id)}
                        className="text-xs text-red-500 hover:text-red-400 hover:bg-red-500/10 px-2 py-1 h-auto"
                      >
                        <X className="h-3 w-3 mr-1" /> Revoke
                      </Button>
                    )}
                  </div>
                ))}
              </ScrollArea>
            </div>
          )}

          {/* Share Input */}
          {isOwner && (
            <div>
              <h4 className="text-sm font-medium mb-2">Share with New User</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter user ID"
                  value={userIdToShare}
                  onChange={(e) => setUserIdToShare(e.target.value)}
                  className="bg-neutral-700 border-neutral-600 focus:border-blue-500"
                />
                <Button onClick={handleShare} className="bg-blue-600 hover:bg-blue-700">
                  Share
                </Button>
              </div>
              {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
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
