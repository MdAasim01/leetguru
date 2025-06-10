import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";
import Navbar from "./components/Landing2/Navbar";
import { axiosInstance } from "./lib/axios";

const App = () => {
	const { authUser, authStatus, setAuthUser, setAuthStatus } = useAuthStore();
	const [isCheckingAuth, setIsCheckingAuth] = useState(true);



	useEffect(() => {
		const root = window.document.documentElement
		if (!root.classList.contains("dark")) {
			root.classList.add("dark")
		}
		// Optionally remove light theme if it was set by mistake or from previous state
		if (root.classList.contains("light")) {
			root.classList.remove("light")
		}
		// Persist for future visits if desired, though for preview this is enough
		// localStorage.setItem("theme", "dark");
	}, [])

	useEffect(() => {
		const check = async () => {
			try {
				const res = await axiosInstance.get("/auth/check");
				console.log("✅ Auth confirmed", res.data);
				setAuthUser(res.data.user);
				setAuthStatus(true);
			} catch (err) {
				console.log("❌ Auth check failed:", err);
				setAuthUser(null);
				setAuthStatus(false);
			} finally {
				setIsCheckingAuth(false);
			}
		};
		check();
	}, []);

	if (isCheckingAuth) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}

	return (
		<>
			<Toaster />
			{/* {authUser && <Navbar />} */}
			<Outlet />
		</>
	);
};

export default App;
