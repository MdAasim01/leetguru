import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problem.routes.js";
import executionRoute from "./routes/executeCode.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello Guys welcome to the LeetGuru");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/problems", problemRoutes);
app.use("/api/v1/execute-code", executionRoute);

app.listen(process.env.PORT, () => {
	console.log("Server is running on port 8080");
});
