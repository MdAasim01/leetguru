import { CheckCircle2, XCircle } from "lucide-react";
import React, { useEffect } from "react";

const SubmissionsPanel = ({ submissions }) => {
	useEffect(() => {
		console.log("————", submissions);
	}, [submissions]);

	if (!submissions || submissions.length === 0) {
		return (
			<div className="p-6 text-muted-foreground text-sm">
				<p>No submissions available yet.</p>
			</div>
		);
	}
	return (
		<div className="p-6 space-y-8 overflow-y-auto h-full text-sm text-foreground">
			{submissions.map((submission, index) => (
				<div className=" bg-base-100 mb-4 shadow-xl" key={index}>
					<div className=" p-2">
						<div className="overflow-x-auto">
							<table className="table w-full">
								<thead>
									<tr>
										<th>Status</th>
										<th>Expected</th>
										<th>Your Output</th>
										<th>Memory</th>
										<th>Time</th>
									</tr>
								</thead>
								<tbody>
									<tr key={submission.id}>
										<td>
											{submission.status === "Accepted" ? (
												<div className="flex items-center gap-2 text-success">
													<CheckCircle2 className="w-5 h-5" />
													Passed
												</div>
											) : (
												<div className="flex items-center gap-2 text-error">
													<XCircle className="w-5 h-5" />
													Failed
												</div>
											)}
										</td>
										<td className="font-mono">
											{submission.stdin}
										</td>
										<td className="font-mono">
											{submission.stdout || "null"}
										</td>
										<td>{submission.memory}</td>
										<td>{submission.time}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default SubmissionsPanel;
