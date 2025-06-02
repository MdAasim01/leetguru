import { db } from "../libs/db.js";

export const canGrantAccessToPlaylist = async (req, res, next) => {
	const { playlistId } = req.params;

	// Fetch the playlist
	const playlist = await db.playlist.findUnique({
		where: { id: playlistId },
	});

	if (!playlist) {
		return res.status(404).json({ error: "Playlist not found" });
	}

	// Only ADMIN who owns the playlist can proceed
	if (req.user.role !== "ADMIN" || req.user.id !== playlist.userId) {
		return res
			.status(403)
			.json({ error: "You are not allowed to manage this playlist" });
	}

	// Attach playlist for later use if needed
	req.playlist = playlist;

	next();
};