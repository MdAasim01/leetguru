import express from "express";
import {
	check,
	getUserCoinBalance,
	login,
	logout,
	register,
	updateUserProfile,
	verifyEmail,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const authRoutes = express.Router();

const uploadFields = upload.fields([
	{
		name: "avatar",
		maxCount: 1,
	},
	{
		name: "coverImage",
		maxCount: 1,
	},
]);

authRoutes.post("/register", register);

authRoutes.get("/verify-email/:token", verifyEmail);

authRoutes.post("/login", login);

authRoutes.post("/logout", authMiddleware, logout);

authRoutes.get("/check", authMiddleware, check);

authRoutes.get("/coin-balance", authMiddleware, getUserCoinBalance);

authRoutes.patch(
	"/update-profile",
	authMiddleware,
	uploadFields,
	updateUserProfile
);

export default authRoutes;
