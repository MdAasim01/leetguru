import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { CreatePlaylistModal } from "../components/playlists/CreatePlaylistModal"
import { AddProblemsModal } from "../components/playlists/AddProblemsModal"
import { SharePlaylistModal } from "../components/playlists/SharePlaylistModal"
import { PlaylistCard } from "../components/playlists/PlaylistCard"
import { initialPlaylistsData, allProblemsData, allUsersData, currentUserId } from "../data/playlist-mock-data"
import { ListMusic, Plus, Users, FolderSymlink } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState(initialPlaylistsData)

  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showAddProblemsModal, setShowAddProblemsModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)

  const [selectedPlaylist, setSelectedPlaylist] = useState(null) // For AddProblems and Share modals
  const [playlistToDelete, setPlaylistToDelete] = useState(null) // For delete confirmation

  const myPlaylists = useMemo(() => playlists.filter((pl) => pl.ownerId === currentUserId), [playlists])
  const sharedPlaylists = useMemo(
    () => playlists.filter((pl) => pl.ownerId !== currentUserId && pl.sharedWith.some((u) => u.id === currentUserId)),
    [playlists],
  )

  const handleCreatePlaylist = (newPlaylistData) => {
    const newPlaylist = {
      id: `pl-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      ownerId: currentUserId,
      sharedWith: [
        { id: currentUserId, name: "You (Owner)", avatarUrl: "/placeholder.svg?width=32&height=32&text=ME" },
      ], // Owner is implicitly shared with
      ...newPlaylistData,
    }
    setPlaylists((prev) => [newPlaylist, ...prev])
  }

  const handleOpenAddProblemsModal = (playlist) => {
    setSelectedPlaylist(playlist)
    setShowAddProblemsModal(true)
  }

  const handleAddProblemsToPlaylist = (problemsToAdd) => {
    if (!selectedPlaylist) return
    setPlaylists((prev) =>
      prev.map((pl) =>
        pl.id === selectedPlaylist.id
          ? {
              ...pl,
              problems: [
                ...pl.problems,
                ...problemsToAdd.filter((pNew) => !pl.problems.find((pOld) => pOld.id === pNew.id)),
              ],
            }
          : pl,
      ),
    )
  }

  const handleRemoveProblemFromPlaylist = (playlistId, problemId) => {
    setPlaylists((prev) =>
      prev.map((pl) =>
        pl.id === playlistId ? { ...pl, problems: pl.problems.filter((p) => p.id !== problemId) } : pl,
      ),
    )
  }

  const handleOpenShareModal = (playlist) => {
    setSelectedPlaylist(playlist)
    setShowShareModal(true)
  }

  const handleShareWithUser = (userToShareWith) => {
    if (!selectedPlaylist) return
    setPlaylists((prev) =>
      prev.map((pl) =>
        pl.id === selectedPlaylist.id ? { ...pl, sharedWith: [...pl.sharedWith, userToShareWith] } : pl,
      ),
    )
  }

  const handleRevokeUserAccess = (userIdToRevoke) => {
    if (!selectedPlaylist) return
    setPlaylists((prev) =>
      prev.map((pl) =>
        pl.id === selectedPlaylist.id
          ? { ...pl, sharedWith: pl.sharedWith.filter((user) => user.id !== userIdToRevoke) }
          : pl,
      ),
    )
  }

  const confirmDeletePlaylist = (playlist) => {
    setPlaylistToDelete(playlist)
  }

  const handleDeletePlaylist = () => {
    if (!playlistToDelete) return
    setPlaylists((prev) => prev.filter((pl) => pl.id !== playlistToDelete.id))
    setPlaylistToDelete(null) // Close confirmation dialog
  }

  const handleViewPlaylistDetails = (playlist) => {
    // For now, just log. In a real app, this might navigate to a dedicated playlist view page.
    console.log("Viewing playlist:", playlist)
    alert(`Viewing details for: ${playlist.name}\n(Implement navigation or detailed modal here)`)
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 p-4 md:p-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-neutral-700">
        <h1 className="text-3xl font-bold flex items-center text-neutral-100 mb-4 sm:mb-0">
          <ListMusic className="mr-3 h-8 w-8 text-blue-500" /> Playlists
        </h1>
        <Button onClick={() => setShowCreateModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Create New Playlist
        </Button>
      </header>

      {/* My Playlists Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-neutral-100">
          <FolderSymlink className="mr-2 h-6 w-6 text-green-500" /> My Playlists ({myPlaylists.length})
        </h2>
        {myPlaylists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                isOwner={true}
                onAddProblems={() => handleOpenAddProblemsModal(playlist)}
                onRemoveProblem={handleRemoveProblemFromPlaylist}
                onDeletePlaylist={() => confirmDeletePlaylist(playlist)}
                onSharePlaylist={() => handleOpenShareModal(playlist)}
                onViewPlaylist={() => handleViewPlaylistDetails(playlist)}
              />
            ))}
          </div>
        ) : (
          <p className="text-neutral-400">You haven't created any playlists yet.</p>
        )}
      </section>

      {/* Shared With Me Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-neutral-100">
          <Users className="mr-2 h-6 w-6 text-purple-500" /> Shared With Me ({sharedPlaylists.length})
        </h2>
        {sharedPlaylists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sharedPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                isOwner={false}
                onViewPlaylist={() => handleViewPlaylistDetails(playlist)}
                // Pass empty functions for actions not available to non-owners
                onAddProblems={() => {}}
                onRemoveProblem={() => {}}
                onDeletePlaylist={() => {}}
                onSharePlaylist={() => handleOpenShareModal(playlist)} // Allow viewing share status
              />
            ))}
          </div>
        ) : (
          <p className="text-neutral-400">No playlists have been shared with you yet.</p>
        )}
      </section>

      {/* Modals */}
      <CreatePlaylistModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreatePlaylist={handleCreatePlaylist}
        allProblems={allProblemsData}
      />
      {selectedPlaylist && (
        <>
          <AddProblemsModal
            isOpen={showAddProblemsModal}
            onClose={() => setShowAddProblemsModal(false)}
            onAddProblems={handleAddProblemsToPlaylist}
            allProblems={allProblemsData}
            existingProblemIds={selectedPlaylist.problems.map((p) => p.id)}
          />
          <SharePlaylistModal
            isOpen={showShareModal}
            onClose={() => setShowShareModal(false)}
            playlist={selectedPlaylist}
            onShareWithUser={handleShareWithUser}
            onRevokeUserAccess={(userId) => handleRevokeUserAccess(selectedPlaylist.id, userId)}
            allUsers={allUsersData}
          />
        </>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!playlistToDelete}
        onOpenChange={(open) => {
          if (!open) setPlaylistToDelete(null)
        }}
      >
        <AlertDialogContent className="bg-neutral-800 border-neutral-700 text-neutral-200">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this playlist?</AlertDialogTitle>
            <AlertDialogDescription className="text-neutral-400">
              This action cannot be undone. Playlist "{playlistToDelete?.name}" will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setPlaylistToDelete(null)}
              className="bg-neutral-700 border-neutral-600 hover:bg-neutral-600 text-neutral-200"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDeletePlaylist} className="bg-red-600 hover:bg-red-700 text-white">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
