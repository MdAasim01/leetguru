import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Loader } from "lucide-react";
import { Navbar } from "./Landing2";

const ProtectedRoute = ({ authentication = true, showHeader = true, children }) => {
	const { authStatus } = useAuthStore();
	const navigate = useNavigate();
	const [isCheckingAuth, setIsCheckingAuth] = useState(true);

	useEffect(() => {
		console.log("P Hit", authStatus);

		// if (authentication && !authStatus) {
		// 	navigate("/login", { replace: true });
		// } else if (!authentication && authStatus) {
		// 	navigate("/all-problems", { replace: true });
		// }

		if (authentication && authStatus !== authentication) {
			navigate("/");
		} else if (!authentication && authStatus !== authentication) {
			navigate("/all-problems");
		}
		setIsCheckingAuth(false);
	}, [authStatus, authentication, navigate]);

	if (isCheckingAuth) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}

	return (
		<>
			{showHeader && <Navbar />}
			{children}
		</>
	);
};

export default ProtectedRoute;
