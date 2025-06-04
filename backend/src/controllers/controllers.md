### auth.controller.js
```js
import bcrypt from "bcryptjs";
import { db } from "../libs/db.js";
import { UserRole } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";

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

		const newUser = await db.user.create({
			data: {
				email,
				password: hashedPassword,
				name,
				role: role || UserRole.USER,
			},
		});

		const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		res.cookie("jwt", token, {
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV !== "development",
			maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
		});

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				id: newUser.id,
				email: newUser.email,
				name: newUser.name,
				role: newUser.role,
				image: newUser.image,
			},
		});
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({
			error: "Error creating user",
		});
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
			sameSite: "strict",
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

```


### executeCode.controller.js
``` js
import { db } from "../libs/db.js";
import {
	getLanguageName,
	pollBatchResults,
	submitBatch,
} from "../libs/judge0.lib.js";

export const executeCode = async (req, res) => {
	try {
		const { source_code, language_id, stdin, expected_outputs, problemId } =
			req.body;

		const userId = req.user.id;

		// Validate test cases
		if (
			!Array.isArray(stdin) ||
			stdin.length === 0 ||
			!Array.isArray(expected_outputs) ||
			expected_outputs.length !== stdin.length
		) {
			return res
				.status(400)
				.json({ error: "Invalid or Missing test cases" });
		}

		// 2. Prepare each test cases for judge0 batch submission
		const submissions = stdin.map((input) => ({
			source_code,
			language_id,
			stdin: input,
		}));

		// 3. Send batch of submissions to judge0
		const submitResponse = await submitBatch(submissions);

		const tokens = submitResponse.map((res) => res.token);

		// 4. Poll judge0 for results of all submitted test cases
		const results = await pollBatchResults(tokens);

		console.log("Results from Judge0:", results);

		//  Analyze test case results
		let allPassed = true;
		const detailedResults = results.map((result, i) => {
			const stdout = result.stdout?.trim();
			const expected_output = expected_outputs[i]?.trim();
			const passed = stdout === expected_output;

			if (!passed) allPassed = false;

			return {
				testCase: i + 1,
				passed,
				stdout,
				expected: expected_output,
				stderr: result.stderr || null,
				compile_output: result.compile_output || null,
				status: result.status.description,
				memory: result.memory ? `${result.memory} KB` : undefined,
				time: result.time ? `${result.time} s` : undefined,
			};

			// console.log(`Testcase #${i+1}`);
			// console.log(`Input for testcase #${i+1}: ${stdin[i]}`)
			// console.log(`Expected Output for testcase #${i+1}: ${expected_output}`)
			// console.log(`Actual output for testcase #${i+1}: ${stdout}`)

			// console.log(`Matched testcase #${i+1}: ${passed}`)
		});

		console.log(detailedResults);

		// store submission summary
		const submission = await db.submission.create({
			data: {
				userId,
				problemId,
				sourceCode: source_code,
				language: getLanguageName(language_id),
				stdin: stdin.join("\n"),
				stdout: JSON.stringify(detailedResults.map((r) => r.stdout)),
				stderr: detailedResults.some((r) => r.stderr)
					? JSON.stringify(detailedResults.map((r) => r.stderr))
					: null,
				compileOutput: detailedResults.some((r) => r.compile_output)
					? JSON.stringify(
							detailedResults.map((r) => r.compile_output)
					  )
					: null,
				status: allPassed ? "Accepted" : "Wrong Answer",
				memory: detailedResults.some((r) => r.memory)
					? JSON.stringify(detailedResults.map((r) => r.memory))
					: null,
				time: detailedResults.some((r) => r.time)
					? JSON.stringify(detailedResults.map((r) => r.time))
					: null,
			},
		});

		// If All passed = true mark problem as solved for the current user
		if (allPassed) {
			await db.problemSolved.upsert({
				where: {
					userId_problemId: {
						userId,
						problemId,
					},
				},
				update: {},
				create: {
					userId,
					problemId,
				},
			});
		}
		// 8. Save individual test case results  using detailedResult

		const testCaseResults = detailedResults.map((result) => ({
			submissionId: submission.id,
			testCase: result.testCase,
			passed: result.passed,
			stdout: result.stdout,
			expected: result.expected,
			stderr: result.stderr,
			compileOutput: result.compile_output,
			status: result.status,
			memory: result.memory,
			time: result.time,
		}));

		await db.testCaseResult.createMany({
			data: testCaseResults,
		});

		const submissionWithTestCase = await db.submission.findUnique({
			where: {
				id: submission.id,
			},
			include: {
				testCases: true,
			},
		});
		//
		res.status(200).json({
			success: true,
			message: "Code Executed! Successfully!",
			submission: submissionWithTestCase,
		});
	} catch (error) {
		console.error("Error executing code:", error.message);
		res.status(500).json({ error: "Failed to execute code" });
	}
};

```

### playlist.controller.js
```js
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

export const getUsersWithPlaylistAccess = async (req, res) => {
	const { playlistId } = req.params;

	try {
		const accessList = await db.playlistAccess.findMany({
			where: { playlistId },
			include: {
				user: {
					select: {
						id: true,
						name: true,
						email: true,
						image: true,
					},
				},
			},
		});

		const users = accessList.map((entry) => entry.user);

		res.status(200).json({
			success: true,
			users,
		});
	} catch (error) {
		console.error("Error fetching access list:", error);
		res.status(500).json({ error: "Failed to fetch access list" });
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
			return res.status(403).json({
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

export const grantPlaylistAccess = async (req, res) => {
	const { playlistId } = req.params;
	const { userId } = req.body;

	try {
		// Validate input
		if (!userId) {
			return res
				.status(400)
				.json({ error: "Missing userId in request body" });
		}

		// Fetch playlist
		const playlist = await db.playlist.findUnique({
			where: { id: playlistId },
		});

		if (!playlist) {
			return res.status(404).json({ error: "Playlist not found" });
		}

		// Check if current user is ADMIN
		if (req.user.role !== "ADMIN") {
			return res
				.status(403)
				.json({ error: "Only ADMINs can grant access" });
		}

		// Check if the current user is also the creator of the playlist
		if (playlist.userId !== req.user.id) {
			return res.status(403).json({
				error: "Only the creator of the playlist can grant access",
			});
		}

		// Prevent access control on public playlists
		if (playlist.isPublic) {
			return res.status(400).json({
				error: "Access control is not needed for public playlists",
			});
		}

		// Ensure target user exists
		const user = await db.user.findUnique({ where: { id: userId } });
		if (!user) {
			return res.status(404).json({ error: "Target user not found" });
		}

		// Grant access using upsert to avoid duplicates
		const access = await db.playlistAccess.upsert({
			where: {
				playlistId_userId: {
					playlistId,
					userId,
				},
			},
			update: {},
			create: {
				playlistId,
				userId,
			},
		});

		res.status(200).json({
			success: true,
			message: "Access granted successfully",
			access,
		});
	} catch (error) {
		console.error("Error granting access:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const revokePlaylistAccess = async (req, res) => {
	const { playlistId } = req.params;
	const { userId } = req.body;

	try {
		if (!userId) {
			return res
				.status(400)
				.json({ error: "Missing userId in request body" });
		}

		// Delete access entry
		await db.playlistAccess.delete({
			where: {
				playlistId_userId: {
					playlistId,
					userId,
				},
			},
		});

		res.status(200).json({
			success: true,
			message: "Access revoked successfully",
		});
	} catch (error) {
		console.error("Error revoking access:", error);

		if (error.code === "P2025") {
			return res.status(404).json({ error: "Access entry not found" });
		}

		res.status(500).json({ error: "Internal server error" });
	}
};


```
### problem.controller.js
```js
import { db } from "../libs/db.js";
import {
	getJudge0LanguageId,
	pollBatchResults,
	submitBatch,
} from "../libs/judge0.lib.js";

export const createProblem = async (req, res) => {
	const {
		title,
		description,
		difficulty,
		tags,
		companies,
		examples,
		constraints,
		testcases,
		codeSnippets,
		referenceSolutions,
		isPublic = true,
	} = req.body;

	try {
		for (const [language, solutionCode] of Object.entries(
			referenceSolutions
		)) {
			const languageId = getJudge0LanguageId(language);

			if (!languageId) {
				return res
					.status(400)
					.json({ error: `Language ${language} is not supported` });
			}

			const submissions = testcases.map(({ input, output }) => ({
				source_code: solutionCode,
				language_id: languageId,
				stdin: input,
				expected_output: output,
			}));

			const submissionResults = await submitBatch(submissions);

			const tokens = submissionResults.map((res) => res.token);

			const results = await pollBatchResults(tokens);

			for (let i = 0; i < results.length; i++) {
				const result = results[i];
				if (result.status.id !== 3) {
					return res.status(400).json({
						error: `Testcase ${
							i + 1
						} failed for language ${language}`,
					});
				}
			}
		}

		const newProblem = await db.problem.create({
			data: {
				title,
				description,
				difficulty,
				tags,
				companies,
				examples,
				constraints,
				testcases,
				codeSnippets,
				referenceSolutions,
				isPublic,
				userId: req.user.id,
			},
		});

		return res.status(201).json({
			sucess: true,
			message: "Message Created Successfully",
			problem: newProblem,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: "Error While Creating Problem",
		});
	}
};

export const getAllProblems = async (req, res) => {
	try {
		const problems = await db.problem.findMany({
			where: {
				OR: [{ isPublic: true }, { userId: req.user.id }],
			},
			include: {
				solvedBy: {
					where: { userId: req.user.id },
				},
			},
		});

		if (!problems) {
			return res.status(404).json({
				error: "No problems Found",
			});
		}

		res.status(200).json({
			sucess: true,
			message: "Message Fetched Successfully",
			problems,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: "Error While Fetching Problems",
		});
	}
};

export const getProblemById = async (req, res) => {
	const { id } = req.params;

	try {
		const problem = await db.problem.findUnique({ where: { id } });

		if (!problem) {
			return res.status(404).json({ error: "Problem not found." });
		}

		// Block access to private problems not owned by user
		if (!problem.isPublic && problem.userId !== req.user.id) {
			return res.status(403).json({
				error: "You are not authorized to view this problem.",
			});
		}

		return res.status(200).json({
			sucess: true,
			message: "Message Created Successfully",
			problem,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: "Error While Fetching Problem by id",
		});
	}
};

export const updateProblem = async (req, res) => {
	const { id } = req.params;
	const {
		title,
		description,
		difficulty,
		tags,
		examples,
		constraints,
		testcases,
		codeSnippets,
		referenceSolutions,
	} = req.body;

	try {
		// First, check if the problem exists and belongs to the user
		const existingProblem = await db.problem.findUnique({
			where: { id },
		});

		if (!existingProblem) {
			return res.status(404).json({ error: "Problem not found" });
		}

		// Check if the user owns this problem (assuming authorization)
		if (existingProblem.userId !== req.user.id) {
			return res.status(403).json({
				error: "You are not authorized to update this problem",
			});
		}

		// Validate reference solutions against test cases (if provided)
		if (referenceSolutions && testcases) {
			for (const [language, solutionCode] of Object.entries(
				referenceSolutions
			)) {
				const languageId = getJudge0LanguageId(language);

				if (!languageId) {
					return res.status(400).json({
						error: `Language ${language} is not supported`,
					});
				}

				const submissions = testcases.map(({ input, output }) => ({
					source_code: solutionCode,
					language_id: languageId,
					stdin: input,
					expected_output: output,
				}));

				const submissionResults = await submitBatch(submissions);
				const tokens = submissionResults.map((res) => res.token);
				const results = await pollBatchResults(tokens);

				for (let i = 0; i < results.length; i++) {
					const result = results[i];
					if (result.status.id !== 3) {
						return res.status(400).json({
							error: `Testcase ${
								i + 1
							} failed for language ${language}`,
						});
					}
				}
			}
		}

		// Prepare update data (only include fields that are provided)
		const updateData = {};
		if (title !== undefined) updateData.title = title;
		if (description !== undefined) updateData.description = description;
		if (difficulty !== undefined) updateData.difficulty = difficulty;
		if (tags !== undefined) updateData.tags = tags;
		if (examples !== undefined) updateData.examples = examples;
		if (constraints !== undefined) updateData.constraints = constraints;
		if (testcases !== undefined) updateData.testcases = testcases;
		if (codeSnippets !== undefined) updateData.codeSnippets = codeSnippets;
		if (referenceSolutions !== undefined)
			updateData.referenceSolutions = referenceSolutions;

		// Update the problem
		const updatedProblem = await db.problem.update({
			where: { id },
			data: updateData,
		});

		return res.status(200).json({
			success: true,
			message: "Problem updated successfully",
			problem: updatedProblem,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: "Error while updating problem",
		});
	}
};

export const deleteProblem = async (req, res) => {
	const { id } = req.params;

	try {
		const problem = await db.problem.findUnique({ where: { id } });

		if (!problem) {
			return res.status(404).json({ error: "Problem Not found" });
		}

		if (problem.userId !== req.user.id) {
			return res
				.status(403)
				.json({
					error: "You are not authorized to delete this problem",
				});
		}

		await db.problem.delete({ where: { id } });

		res.status(200).json({
			success: true,
			message: "Problem deleted Successfully",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: "Error While deleting the problem",
		});
	}
};

export const getAllProblemsSolvedByUser = async (req, res) => {
	try {
		const problems = await db.problem.findMany({
			where: {
				solvedBy: {
					some: {
						userId: req.user.id,
					},
				},
			},
			include: {
				solvedBy: {
					where: {
						userId: req.user.id,
					},
				},
			},
		});

		res.status(200).json({
			success: true,
			message: "Problems fetched successfully",
			problems,
		});
	} catch (error) {
		console.error("Error fetching problems :", error);
		res.status(500).json({ error: "Failed to fetch problems" });
	}
};

```


### submission.controller.js
```js

import { db } from "../libs/db.js";

export const getAllSubmission = async (req, res) => {
	try {
		const userId = req.user.id;

		const submissions = await db.submission.findMany({
			where: {
				userId: userId,
			},
		});

		res.status(200).json({
			success: true,
			message: "Submissions fetched successfully",
			submissions,
		});
	} catch (error) {
		console.error("Fetch Submissions Error:", error);
		res.status(500).json({ error: "Failed to fetch submissions" });
	}
};

export const getSubmissionsForProblem = async (req, res) => {
	try {
		const userId = req.user.id;
		const problemId = req.params.problemId;
		const submissions = await db.submission.findMany({
			where: {
				userId: userId,
				problemId: problemId,
			},
		});

		res.status(200).json({
			success: true,
			message: "Submission fetched successfully",
			submissions,
		});
	} catch (error) {
		console.error("Fetch Submissions Error:", error);
		res.status(500).json({ error: "Failed to fetch submissions" });
	}
};

export const getAllTheSubmissionsForProblem = async (req, res) => {
	try {
		const problemId = req.params.problemId;
		const submission = await db.submission.count({
			where: {
				problemId: problemId,
			},
		});

		res.status(200).json({
			success: true,
			message: "Submissions Fetched successfully",
			count: submission,
		});
	} catch (error) {
		console.error("Fetch Submissions Error:", error);
		res.status(500).json({ error: "Failed to fetch submissions" });
	}
};

```