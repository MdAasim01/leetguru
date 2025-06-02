import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
	addProblemToPlaylist,
	createPlayList,
	deletePlayList,
	getPlayAllListDetails,
	getPlayListDetails,
	getUsersWithPlaylistAccess,
	grantPlaylistAccess,
	removeProblemFromPlaylist,
	revokePlaylistAccess,
} from "../controllers/playlist.controller.js";
import { canGrantAccessToPlaylist } from "../middlewares/playlist.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getPlayAllListDetails);

router.get("/:playlistId", authMiddleware, getPlayListDetails);

router.post("/create-playlist", authMiddleware, createPlayList);

router.post("/:playlistId/add-problem", authMiddleware, addProblemToPlaylist);

router.delete("/:playlistId", authMiddleware, deletePlayList);

router.get(
	"/playlist/:playlistId/access",
	authMiddleware,
	canGrantAccessToPlaylist,
	getUsersWithPlaylistAccess
);

router.post(
	"/:playlistId/access",
	authMiddleware,
	canGrantAccessToPlaylist,
	grantPlaylistAccess
);

router.delete(
	"/:playlistId/access",
	authMiddleware,
	canGrantAccessToPlaylist,
	revokePlaylistAccess
);


router.delete(
	"/:playlistId/remove-problem",
	authMiddleware,
	removeProblemFromPlaylist
);

export default router;
