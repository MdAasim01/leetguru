import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problem.routes.js";
import executionRoute from "./routes/executeCode.routes.js";
import submissionRoutes from "./routes/submission.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";
import userStatsRoutes from "./routes/profile.routes.js";

import cors from "cors";
import cookieParser from "cookie-parser";
import feedbackRouter from "./routes/feedback.routes.js";

dotenv.config();

const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN?.split(","),
		credentials: true,
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("Hello Guys welcome to the LeetGuru");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/problems", problemRoutes);
app.use("/api/v1/execute-code", executionRoute);
app.use("/api/v1/submission", submissionRoutes);
app.use("/api/v1/playlist", playlistRoutes);
app.use("/api/v1/user-stats", userStatsRoutes);
app.use("/api/v1/feedback", feedbackRouter);

app.listen(process.env.PORT, () => {
	console.log("Server is running on port 8080");
});
