import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  getUserActivitySummary,
  getUserStats,
  getSolvedByDifficulty,
  getSolvedByLanguage,
  getSolvedProblemDetails,
  getUserRank,
} from '../controllers/profile.controller.js';

const router = express.Router();

// All routes below assume authentication middleware is applied globally or above this route group

// GET /api/user-stats/activity-summary
router.get('/activity-summary', authMiddleware, getUserActivitySummary);

// GET /api/user-stats/overview
router.get('/overview', authMiddleware, getUserStats);

// GET /api/user-stats/solved-difficulty
router.get('/solved-difficulty', authMiddleware, getSolvedByDifficulty);

// GET /api/user-stats/solved-language
router.get('/solved-language', authMiddleware, getSolvedByLanguage);

// GET /api/user-stats/solved-details
router.get('/solved-details', authMiddleware, getSolvedProblemDetails);

// GET /api/user-stats/rank
router.get('/rank', authMiddleware, getUserRank);

export default router;
