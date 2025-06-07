import express from "express";
import { getCodeFeedback } from "../controllers/feedback.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const feedbackRouter = express.Router();

feedbackRouter.post("/code-feedback", authMiddleware, getCodeFeedback);

export default feedbackRouter;
