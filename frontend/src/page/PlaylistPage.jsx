import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CreatePlaylistModal } from "../components/playlists/CreatePlaylistModal"
import { AddProblemsModal } from "../components/playlists/AddProblemsModal"
import { SharePlaylistModal } from "../components/playlists/SharePlaylistModal"
import { PlaylistCard } from "../components/playlists/PlaylistCard"
import { initialPlaylistsData, allUsersData } from "../data/playlist-mock-data"
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
import { useProblemStore } from "@/store/useProblemStore"
import { usePlaylistStore } from "@/store/usePlaylistStore"
import { useAuthStore } from "@/store/useAuthStore"

export default function PlaylistsPage() {

  const {
    playlists,
    getAllPlaylists,
    createPlaylist,
    addProblemToPlaylist,
    removeProblemFromPlaylist,
    deletePlaylist,
    grantAccessToPlaylist, revokeAccessFromPlaylist
  } = usePlaylistStore();

  const { problems, getAllProblems } = useProblemStore();
  const { authUser } = useAuthStore();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAddProblemsModal, setShowAddProblemsModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [playlistToDelete, setPlaylistToDelete] = useState(null);

  const myPlaylists = useMemo(
    () => playlists.filter((pl) => pl.userId === authUser.id),
    [playlists]
  );

  const sharedPlaylists = useMemo(
    () =>
      playlists.filter(
        (pl) =>
          pl.userId !== authUser.id &&
          pl.sharedWith?.some((u) => u.id === authUser.id)
      ),
    [playlists]
  );

  useEffect(() => {
    getAllProblems();
    getAllPlaylists();
  }, [getAllProblems, getAllPlaylists]);

  const handleCreatePlaylist = async (newPlaylistData) => {
    const sharedWithOwner = [
      {
        id: authUser.id,
        name: "You (Owner)",
        avatarUrl: "/placeholder.svg?width=32&height=32&text=ME",
      },
    ];
    await createPlaylist({
      ...newPlaylistData,
      userId: authUser.id,
      sharedWith: sharedWithOwner,
    });
  };

  const handleOpenAddProblemsModal = (playlist) => {
    setSelectedPlaylist(playlist);
    setShowAddProblemsModal(true);
  };

  const handleAddProblemsToPlaylist = async (problemsToAdd) => {
    if (!selectedPlaylist) return;
    const problemIds = problemsToAdd.map((p) => p.id);
    await addProblemToPlaylist(selectedPlaylist.id, problemIds);
  };

  const handleRemoveProblemFromPlaylist = async (playlistId, problemId) => {
    await removeProblemFromPlaylist(playlistId, [problemId]);
  };

  const handleOpenShareModal = (playlist) => {
    setSelectedPlaylist(playlist);
    setShowShareModal(true);
  };

  const handleShareWithUser = async (userToShareWith) => {
    if (!selectedPlaylist) return;
    await grantAccessToPlaylist(selectedPlaylist.id, userToShareWith.id);
  };

  const handleRevokeUserAccess = async (playlistId, userIdToRevoke) => {
    await revokeAccessFromPlaylist(playlistId, userIdToRevoke);
  };

  const confirmDeletePlaylist = (playlist) => {
    setPlaylistToDelete(playlist);
  };

  const handleDeletePlaylist = async () => {
    if (!playlistToDelete) return;
    await deletePlaylist(playlistToDelete.id);
    setPlaylistToDelete(null);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 p-4 md:p-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-neutral-700">
        <h1 className="text-3xl font-bold flex items-center text-neutral-100 mb-4 sm:mb-0">
          <ListMusic className="mr-3 h-8 w-8 text-blue-500" /> Playlists
        </h1>
        <Button onClick={() => setShowCreateModal(true)} className="bg-primary hover:bg-primary/80 text-slate-800">
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
                // Pass empty functions for actions not available to non-owners
                onAddProblems={() => { }}
                onRemoveProblem={() => { }}
                onDeletePlaylist={() => { }}
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
        allProblems={problems}
      />
      {selectedPlaylist && (
        <>
          <AddProblemsModal
            isOpen={showAddProblemsModal}
            onClose={() => setShowAddProblemsModal(false)}
            allProblems={problems}
            existingProblemIds={selectedPlaylist?.problems.map((p) => p.problem.id) || []}
            playlistId={selectedPlaylist?.id}
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
