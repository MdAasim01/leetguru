import { db } from "../libs/db.js";

export const createPlayList = async (req, res) => {
	try {
		const { name, description } = req.body;
		const userId = req.user.id;

		const playList = await db.playlist.create({
			data: {
				name,
				description,
				userId,
			},
		});
		res.status(200).json({
			success: true,
			message: "Playlist created successfully",
			playList,
		});
	} catch (error) {
		console.error("Error creating playlist:", error);
		res.status(500).json({ error: "Failed to create playlist" });
	}
};

export const getPlayAllListDetails = async (req, res) => {
	try {
		const playLists = await db.playlist.findMany({
			where: { userId: req.user.id },
			include: {
				problems: {
					include: {
						problem: {
							where: {
								OR: [
									{ isPublic: true },
									{ userId: req.user.id },
								],
							},
						},
					},
				},
			},
		});

		res.status(200).json({
			success: true,
			message: "Playlists fetched successfully",
			playLists,
		});
	} catch (error) {
		console.error("Error fetching playlists:", error);
		res.status(500).json({ error: "Failed to fetch playlists" });
	}
};

export const getPlayListDetails = async (req, res) => {
	const { playlistId } = req.params;

	try {
		const playList = await db.playlist.findUnique({
			where: {
				id: playlistId,
				userId: req.user.id,
			},
			include: {
				problems: {
					include: {
						problem: {
							where: {
								OR: [
									{ isPublic: true },
									{ userId: req.user.id },
								],
							},
						},
					},
				},
			},
		});

		if (!playList) {
			return res.status(404).json({ error: "Playlist not found" });
		}

		res.status(200).json({
			success: true,
			message: "Playlist fetched successfully",
			playList,
		});
	} catch (error) {
		console.error("Error fetching playlist:", error);
		res.status(500).json({ error: "Failed to fetch playlist" });
	}
};

export const addProblemToPlaylist = async (req, res) => {
	const { playlistId } = req.params;
	const { problemIds } = req.body; // Accept an array of problem IDs

	try {
		// Ensure problemIds is an array
		if (!Array.isArray(problemIds) || problemIds.length === 0) {
			return res
				.status(400)
				.json({ error: "Invalid or missing problemIds" });
		}

		console.log(
			problemIds.map((problemId) => ({
				playlistId,
				problemId,
			}))
		);
		const accessibleProblems = await db.problem.findMany({
			where: {
				id: { in: problemIds },
				OR: [{ isPublic: true }, { userId: req.user.id }],
			},
			select: { id: true },
		});

		const accessibleIds = accessibleProblems.map((p) => p.id);

		if (accessibleIds.length !== problemIds.length) {
			return res.status(403).json({
				error: "Some problems are private and not accessible.",
			});
		}

		// Proceed to insert only accessible problems
		const problemsInPlaylist = await db.problemInPlaylist.createMany({
			data: accessibleIds.map((problemId) => ({
				playListId: playlistId,
				problemId,
			})),
		});

		res.status(201).json({
			success: true,
			message: "Problems added to playlist successfully",
			problemsInPlaylist,
		});
	} catch (error) {
		console.error("Error adding problems to playlist:", error.message);
		res.status(500).json({ error: "Failed to add problems to playlist" });
	}
};

export const deletePlayList = async (req, res) => {
	const { playlistId } = req.params;

	try {
		const playlist = await db.playlist.findUnique({
			where: { id: playlistId },
		});

		if (!playlist || playlist.userId !== req.user.id) {
			return res.status(403).json({
				error: "You are not authorized to delete this playlist",
			});
		}

		const deletedPlaylist = await db.playlist.delete({
			where: { id: playlistId },
		});

		res.status(200).json({
			success: true,
			message: "Playlist deleted successfully",
			deletedPlaylist,
		});
	} catch (error) {
		console.error("Error deleting playlist:", error.message);
		res.status(500).json({ error: "Failed to delete playlist" });
	}
};

export const removeProblemFromPlaylist = async (req, res) => {
	const { playlistId } = req.params;
	const { problemIds } = req.body;

	try {
		if (!Array.isArray(problemIds) || problemIds.length === 0) {
			return res
				.status(400)
				.json({ error: "Invalid or missing problemIds" });
		}

		// Verify ownership of playlist
		const playlist = await db.playlist.findUnique({
			where: { id: playlistId },
		});

		if (!playlist || playlist.userId !== req.user.id) {
			return res
				.status(403)
				.json({
					error: "You are not authorized to modify this playlist",
				});
		}

		const deletedProblem = await db.problemInPlaylist.deleteMany({
			where: {
				playlistId,
				problemId: {
					in: problemIds,
				},
			},
		});

		res.status(200).json({
			success: true,
			message: "Problem removed from playlist successfully",
			deletedProblem,
		});
	} catch (error) {
		console.error("Error removing problem from playlist:", error.message);
		res.status(500).json({
			error: "Failed to remove problem from playlist",
		});
	}
};
