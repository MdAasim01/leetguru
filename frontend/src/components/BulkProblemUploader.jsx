import React, { useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

import  problems from "../data/uploadProblems";

const BulkProblemUploader = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmitProblem = async () => {
		if (currentIndex >= problems.length) {
			toast.success("✅ All problems uploaded");
			return;
		}

		const problem = problems[currentIndex];

		// Extract company from last tag if present
		const tags = [...problem.tags];
		const company = tags.pop(); // remove last tag

		const payload = {
			...problem,
			tags,
			companies: company ? [company] : [],
			isPublic: true,
		};

		try {
			setIsLoading(true);
			const res = await axiosInstance.post("/problems/create-problem", payload);
			toast.success(`✅ Problem ${currentIndex + 1} created: ${problem.title}`);
			setCurrentIndex((prev) => prev + 1);
		} catch (error) {
			console.error(error);
			toast.error("❌ Error uploading problem");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="p-6 max-w-xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">Bulk Problem Uploader</h1>
			<p className="mb-2 text-sm text-gray-600">
				Problems uploaded: {currentIndex} / {problems.length}
			</p>
			<button
				className="btn btn-primary"
				onClick={handleSubmitProblem}
				disabled={isLoading || currentIndex >= problems.length}
			>
				{isLoading ? (
					<span className="loading loading-spinner text-white"></span>
				) : currentIndex >= problems.length ? (
					"✅ All Problems Uploaded"
				) : (
					`Upload Problem #${currentIndex + 1}`
				)}
			</button>
		</div>
	);
};

export default BulkProblemUploader;
