import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const usePlaylistStore = create((set, get) => ({
	playlists: [],
	currentPlaylist: null,
	isLoading: false,
	error: null,

	createPlaylist: async (playlistData) => {
		try {
			set({ isLoading: true });
			const response = await axiosInstance.post(
				"/playlist/create-playlist",
				playlistData
			);

			set((state) => ({
				playlists: [...state.playlists, response.data.playList],
			}));

			toast.success("Playlist created successfully");
			return response.data.playList;
		} catch (error) {
			console.error("Error creating playlist:", error);
			toast.error(
				error.response?.data?.error || "Failed to create playlist"
			);
			throw error;
		} finally {
			set({ isLoading: false });
		}
	},

	updatePlaylistDetails: async (playlistId, updates) => {
		try {
			const response = await axiosInstance.patch(
				`/playlist/${playlistId}/update`,
				updates
			);

			set((state) => ({
				playlists: state.playlists.map((pl) =>
					pl.id === playlistId ? response.data.playlist : pl
				),
			}));

			toast.success("Playlist updated successfully");
			return response.data.playlist;
		} catch (error) {
			console.error("Error updating playlist:", error);
			toast.error(
				error.response?.data?.error || "Failed to update playlist"
			);
			throw error;
		}
	},

	getAllPlaylists: async () => {
		try {
			set({ isLoading: true });
			const response = await axiosInstance.get(
				"/playlist/get-all-playlists"
			);
			set({ playlists: response.data.playLists });
		} catch (error) {
			console.error("Error fetching playlists:", error);
			toast.error("Failed to fetch playlists");
		} finally {
			set({ isLoading: false });
		}
	},

	getPlaylistDetails: async (playlistId) => {
		try {
			set({ isLoading: true });
			const response = await axiosInstance.get(`/playlist/${playlistId}`);
			set({ currentPlaylist: response.data.playList });
		} catch (error) {
			console.error("Error fetching playlist details:", error);
			toast.error("Failed to fetch playlist details");
		} finally {
			set({ isLoading: false });
		}
	},

	addProblemToPlaylist: async (playlistId, problemIds) => {
		try {
			set({ isLoading: true });
			await axiosInstance.post(`/playlist/${playlistId}/add-problem`, {
				problemIds,
			});

			toast.success("Problem added to playlist");

			// Refresh the playlist details
			if (get().currentPlaylist?.id === playlistId) {
				await get().getPlaylistDetails(playlistId);
			}
		} catch (error) {
			console.error("Error adding problem to playlist:", error);
			toast.error("Failed to add problem to playlist");
		} finally {
			set({ isLoading: false });
		}
	},

	removeProblemFromPlaylist: async (playlistId, problemIds) => {
		try {
			set({ isLoading: true });
			await axiosInstance.post(
				`/playlist/${playlistId}/remove-problems`,
				{
					problemIds,
				}
			);

			toast.success("Problem removed from playlist");

			// Refresh the playlist details
			if (get().currentPlaylist?.id === playlistId) {
				await get().getPlaylistDetails(playlistId);
			}
		} catch (error) {
			console.error("Error removing problem from playlist:", error);
			toast.error("Failed to remove problem from playlist");
		} finally {
			set({ isLoading: false });
		}
	},

	deletePlaylist: async (playlistId) => {
		try {
			set({ isLoading: true });
			await axiosInstance.delete(`/playlist/${playlistId}`);

			set((state) => ({
				playlists: state.playlists.filter((p) => p.id !== playlistId),
			}));

			toast.success("Playlist deleted successfully");
		} catch (error) {
			console.error("Error deleting playlist:", error);
			toast.error("Failed to delete playlist");
		} finally {
			set({ isLoading: false });
		}
	},

	grantAccessToPlaylist: async (playlistId, userId) => {
		try {
			const response = await axiosInstance.post(
				`/playlist/${playlistId}/access`,
				{ userId }
			);
			toast.success("Access granted successfully");
			return response.data.access;
		} catch (error) {
			console.error("Error granting playlist access:", error);
			toast.error(
				error.response?.data?.error || "Failed to grant access"
			);
			throw error;
		}
	},

	revokeAccessFromPlaylist: async (playlistId, userId) => {
		try {
			await axiosInstance.delete(
				`/playlist/${playlistId}/revoke-access`,
				{ data: { userId } }
			);
			toast.success("Access revoked successfully");
		} catch (error) {
			console.error("Error revoking playlist access:", error);
			toast.error(
				error.response?.data?.error || "Failed to revoke access"
			);
			throw error;
		}
	},

	getPlaylistAccessList: async (playlistId) => {
		try {
			const response = await axiosInstance.get(
				`/playlist/${playlistId}/get-access`
			);
			return response.data.users;
		} catch (error) {
			console.error("Error fetching access list:", error);
			toast.error("Failed to fetch access list");
			return [];
		}
	},
}));
