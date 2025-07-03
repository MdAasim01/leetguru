import bcrypt from "bcryptjs";
import { db } from "../libs/db.js";
import { UserRole } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";
import { uploadOnCloudinary } from "../libs/cloudinary.js";
import { sendVerificationEmail } from "../libs/sendVerificationEmail.js";
import crypto from "crypto";

export const register = async (req, res) => {
	const { email, password, name, role } = req.body;

	try {
		const existingUser = await db.user.findUnique({
			where: {
				email,
			},
		});

		if (existingUser) {
			return res.status(400).json({
				error: "User already exists",
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const verificationToken = crypto.randomBytes(32).toString("hex");
		const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

		const newUser = await db.user.create({
			data: {
				email,
				password: hashedPassword,
				name,
				role: role || UserRole.USER,
				verificationToken,
				verificationTokenExpiry: expiry,
			},
		});

		if (newUser) {
			await sendVerificationEmail(email, verificationToken);
		}

		// const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
		// 	expiresIn: "7d",
		// });

		// res.cookie("jwt", token, {
		// 	httpOnly: true,
		// 	sameSite: "None",
		// 	secure: process.env.NODE_ENV !== "development",
		// 	maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
		// });

		// res.status(201).json({
		// 	success: true,
		// 	message: "User created successfully",
		// 	user: {
		// 		id: newUser.id,
		// 		email: newUser.email,
		// 		name: newUser.name,
		// 		role: newUser.role,
		// 		image: newUser.image,
		// 		coins: newUser.coins,
		// 	},
		// });

		res.status(201).json({
			success: true,
			message: "User created. Check your email to verify your account.",
		});
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({
			error: "Error creating user",
		});
	}
};

export const verifyEmail = async (req, res) => {
	const { token } = req.params;

	try {
		const user = await db.user.findFirst({
			where: {
				verificationToken: token,
				verificationTokenExpiry: { gte: new Date() },
			},
		});

		if (!user) {
			return res.status(400).json({ error: "Invalid or expired token" });
		}

		await db.user.update({
			where: { id: user.id },
			data: {
				isVerified: true,
				verificationToken: null,
				verificationTokenExpiry: null,
			},
		});

		// optionally: login automatically
		const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		res.cookie("jwt", jwtToken, {
			httpOnly: true,
			sameSite: "None",
			secure: process.env.NODE_ENV !== "development",
			maxAge: 1000 * 60 * 60 * 24 * 7,
		});

		res.json({ message: "Email verified successfully!" });
	} catch (error) {
		console.error("Email verification error:", error);
		res.status(500).json({ error: "Server error" });
	}
};


export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await db.user.findUnique({
			where: {
				email,
			},
		});

		if (!user) {
			return res.status(401).json({
				error: "User not found",
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(401).json({
				error: "Invalid credentials",
			});
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		res.cookie("jwt", token, {
			httpOnly: true,
			sameSite: "None",
			secure: process.env.NODE_ENV !== "development",
			maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
		});

		res.status(200).json({
			success: true,
			message: "User Logged in successfully",
			user: {
				id: user.id,
				email: user.email,
				name: user.name,
				role: user.role,
				image: user.image,
				coins: user.coins,
			},
		});
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({
			error: "Error logging in user",
		});
	}
};

export const logout = async (req, res) => {
	try {
		res.clearCookie("jwt", {
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV !== "development",
		});

		res.status(200).json({
			success: true,
			message: "User logged out successfully",
		});
	} catch (error) {
		console.error("Error logging out user:", error);
		res.status(500).json({
			error: "Error logging out user",
		});
	}
};

export const check = async (req, res) => {
	try {
		res.status(200).json({
			success: true,
			message: "User authenticated successfully",
			user: req.user,
		});
	} catch (error) {
		console.error("Error checking user:", error);
		res.status(500).json({
			error: "Error checking user",
		});
	}
};

export const updateUserProfile = async (req, res) => {
	const userId = req.user.id;
	const { name, bio, dob, website, github, linkedin, twitter } = req.body;

	const avatarFileArray = req.files?.avatar;
	const avatarLocalPath =
		Array.isArray(avatarFileArray) && avatarFileArray.length > 0
			? avatarFileArray[0].path
			: null;

	const coverFileArray = req.files?.coverImage;
	const coverImageLocalPath =
		Array.isArray(coverFileArray) && coverFileArray.length > 0
			? coverFileArray[0].path
			: null;

	if (
		req.files &&
		Array.isArray(req.files.coverImage) &&
		req.files.coverImage.length > 0
	) {
		coverImageLocalPath = req.files.coverImage[0].path;
	}

	const avatar = await uploadOnCloudinary(avatarLocalPath);

	try {
		const updatedUser = await db.user.update({
			where: { id: userId },
			data: {
				name,
				bio,
				dob: dob ? new Date(dob) : undefined,
				image: avatar?.url,
				website,
				github,
				linkedin,
				twitter,
			},
			select: {
				id: true,
				email: true,
				name: true,
				image: true,
				role: true,
				dob: true,
				bio: true,
				website: true,
				github: true,
				linkedin: true,
				twitter: true,
			},
		});

		res.status(200).json({
			success: true,
			message: "Profile updated successfully",
			user: updatedUser,
		});
	} catch (error) {
		console.error("Error updating profile:", error);
		res.status(500).json({ error: "Failed to update profile" });
	}
};

export const getUserCoinBalance = async (req, res) => {
	const user = await db.user.findUnique({
		where: { id: req.user.id },
		select: { coins: true },
	});

	res.status(200).json({ coins: user.coins });
};