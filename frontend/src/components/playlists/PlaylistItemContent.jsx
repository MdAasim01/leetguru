import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Trash2, Share2, Users, XCircle } from 'lucide-react';
import { currentUserId } from '@/data/playlist-mock-data'; // To check ownership

export function PlaylistItemContent({ playlist, onRemoveProblem, onAddProblemsClick, onRevokeAccess }) {
  const isOwner = playlist.ownerId === currentUserId;

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/playlist/${playlist.id}`)
      .then(() => alert(`Link to playlist "${playlist.name}" copied to clipboard!`))
      .catch(err => console.error('Failed to copy link: ', err));
  };

  return (
    <div className="p-4 space-y-6 bg-neutral-800 rounded-b-md">
      {/* Problems Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold flex items-center">
            <Users className="mr-2 h-5 w-5 text-blue-400" /> Problems in Playlist ({playlist.problems.length})
          </h3>
          {isOwner && (
            <Button variant="outline" size="sm" onClick={onAddProblemsClick} className="text-xs border-neutral-600 hover:bg-neutral-700">
              <PlusCircle className="mr-1.5 h-4 w-4" /> Add Problems
            </Button>
          )}
        </div>
        {playlist.problems.length > 0 ? (
          <div className="rounded-md border border-neutral-700 max-h-60 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-700 hover:bg-neutral-700/30">
                  <TableHead className="text-neutral-400">Title</TableHead>
                  <TableHead className="text-neutral-400">Difficulty</TableHead>
                  <TableHead className="text-neutral-400">Tags</TableHead>
                  {isOwner && <TableHead className="text-right text-neutral-400">Actions</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {playlist.problems.map(problem => (
                  <TableRow key={problem.id} className="border-neutral-700 hover:bg-neutral-700/30">
                    <TableCell className="font-medium">{problem.title}</TableCell>
                    <TableCell>
                       <Badge variant={
                        problem.difficulty === "Easy" ? "success" :
                        problem.difficulty === "Medium" ? "warning" :
                        problem.difficulty === "Hard" ? "destructive" : "secondary"
                      } className="text-xs">{problem.difficulty}</Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {problem.tags?.slice(0, 3).join(', ')}
                    </TableCell>
                    {isOwner && (
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => onRemoveProblem(problem.id)} className="h-7 w-7 text-red-500 hover:text-red-400 hover:bg-red-500/10">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">No problems in this playlist yet. {isOwner ? "Click 'Add Problems' to get started!" : ""}</p>
        )}
      </div>

      {/* Sharing Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold flex items-center">
            <Users className="mr-2 h-5 w-5 text-green-400" /> Shared With ({playlist.sharedWith.length})
          </h3>
          {isOwner && (
            <Button variant="outline" size="sm" onClick={handleShare} className="text-xs border-neutral-600 hover:bg-neutral-700">
              <Share2 className="mr-1.5 h-4 w-4" /> Share Playlist
            </Button>
          )}
        </div>
        {playlist.sharedWith.length > 0 ? (
          <div className="rounded-md border border-neutral-700 max-h-40 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-700 hover:bg-neutral-700/30">
                  <TableHead className="text-neutral-400">User</TableHead>
                  {isOwner && <TableHead className="text-right text-neutral-400">Actions</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {playlist.sharedWith.map(user => (
                  <TableRow key={user.id} className="border-neutral-700 hover:bg-neutral-700/30">
                    <TableCell className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={user.avatarUrl || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="text-xs">{user.name.substring(0,1)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{user.name} {user.id === currentUserId ? "(You)" : ""}</span>
                    </TableCell>
                    {isOwner && user.id !== currentUserId && ( // Owner cannot revoke their own access this way
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => onRevokeAccess(user.id)} className="h-7 w-7 text-orange-500 hover:text-orange-400 hover:bg-orange-500/10">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    )}
                     {isOwner && user.id === currentUserId && <TableCell></TableCell>} {/* Empty cell for owner's row */}
                     {!isOwner && <TableCell></TableCell>} {/* Empty cell if not owner */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">This playlist is not shared with anyone yet.</p>
        )}
      </div>
    </div>
  );
}