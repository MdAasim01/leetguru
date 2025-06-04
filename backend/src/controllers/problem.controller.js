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
