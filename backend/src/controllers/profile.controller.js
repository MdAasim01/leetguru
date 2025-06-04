import { db } from "../libs/db.js";
import { subDays, format, eachDayOfInterval, parseISO } from "date-fns";

// 1. Get Streaks, Active Days, GitHub-style graph
export const getUserActivitySummary = async (req, res) => {
	try {
		const userId = req.user.id;
		const submissions = await db.submission.findMany({
			where: { userId },
			select: { createdAt: true },
		});

		const dateMap = new Map();
		for (const { createdAt } of submissions) {
			const date = format(new Date(createdAt), "yyyy-MM-dd");
			dateMap.set(date, (dateMap.get(date) || 0) + 1);
		}

		const dates = Array.from(dateMap.keys()).sort();
		let currentStreak = 0,
			longestStreak = 0,
			prevDate = null;

		for (const dateStr of dates.reverse()) {
			const date = parseISO(dateStr);
			if (!prevDate || subDays(prevDate, 1).toDateString() === date.toDateString()) {
				currentStreak++;
				longestStreak = Math.max(longestStreak, currentStreak);
				prevDate = date;
			} else {
				break;
			}
		}

		res.status(200).json({
			success: true,
			data: {
				currentStreak,
				longestStreak,
				totalActiveDays: dateMap.size,
				activityGraph: Array.from(dateMap.entries()).map(([date, count]) => ({ date, count })),
			},
		});
	} catch (error) {
		console.error("Activity summary error:", error);
		res.status(500).json({ error: "Failed to calculate user activity" });
	}
};

// 2. Get Acceptance Rate + Submission Count
export const getUserStats = async (req, res) => {
	try {
		const userId = req.user.id;
		const total = await db.submission.count({ where: { userId } });
		const accepted = await db.submission.count({ where: { userId, status: "Accepted" } });

		res.status(200).json({
			success: true,
			data: {
				totalSubmissions: total,
				accepted,
				acceptanceRate: total ? ((accepted / total) * 100).toFixed(2) : "0.00",
			},
		});
	} catch (error) {
		console.error("User stats error:", error);
		res.status(500).json({ error: "Failed to get user stats" });
	}
};

// 3. Problems Solved by Difficulty
export const getSolvedByDifficulty = async (req, res) => {
	try {
		const userId = req.user.id;
		const problems = await db.problemSolved.findMany({
			where: { userId },
			include: { problem: true },
		});

		const result = { EASY: 0, MEDIUM: 0, HARD: 0 };
		for (const { problem } of problems) {
			result[problem.difficulty]++;
		}

		res.status(200).json({ success: true, data: result });
	} catch (error) {
		console.error("Difficulty stats error:", error);
		res.status(500).json({ error: "Failed to get difficulty stats" });
	}
};

// 4. Problems Solved by Language
export const getSolvedByLanguage = async (req, res) => {
	try {
		const userId = req.user.id;
		const solved = await db.submission.findMany({
			where: { userId, status: "Accepted" },
			select: { problemId: true, language: true },
		});

		const map = new Map();
		for (const { language, problemId } of solved) {
			if (!map.has(problemId)) {
				map.set(problemId, language);
			}
		}

		const result = {};
		for (const lang of map.values()) {
			result[lang] = (result[lang] || 0) + 1;
		}

		res.status(200).json({ success: true, data: result });
	} catch (error) {
		console.error("Language stats error:", error);
		res.status(500).json({ error: "Failed to get language stats" });
	}
};

// 5. Solved Problem Details
export const getSolvedProblemDetails = async (req, res) => {
	try {
		const userId = req.user.id;
		const solved = await db.problemSolved.findMany({
			where: { userId },
			include: { problem: true },
		});

		const results = [];
		for (const { problemId, problem, createdAt } of solved) {
			const submission = await db.submission.findFirst({
				where: {
					userId,
					problemId,
					status: "Accepted",
				},
				orderBy: { createdAt: "desc" },
			});

			if (submission) {
				results.push({
					title: problem.title,
					language: submission.language,
					status: submission.status,
					runtime: submission.time,
					memory: submission.memory,
					date: submission.createdAt,
				});
			}
		}

		res.status(200).json({ success: true, data: results });
	} catch (error) {
		console.error("Solved details error:", error);
		res.status(500).json({ error: "Failed to fetch solved details" });
	}
};

// 6. Ranking (based on problems solved)
export const getUserRank = async (req, res) => {
	try {
		const userId = req.user.id;
		const all = await db.user.findMany({
			select: {
				id: true,
				problemSolved: true,
			},
		});

		const ranked = all
			.map((user) => ({
				userId: user.id,
				count: user.problemSolved.length,
			}))
			.sort((a, b) => b.count - a.count);

		const totalUsers = ranked.length;
		const rank = ranked.findIndex((u) => u.userId === userId) + 1;
		const percentile = ((totalUsers - rank) / totalUsers) * 100;

		res.status(200).json({
			success: true,
			data: {
				totalUsers,
				rank,
				percentile: percentile.toFixed(2),
			},
		});
	} catch (error) {
		console.error("Ranking error:", error);
		res.status(500).json({ error: "Failed to fetch ranking" });
	}
};
