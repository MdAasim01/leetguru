import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Loader } from "lucide-react";

const AdminRoute = ({ children }) => {
	const { authUser, isCheckingAuth } = useAuthStore();
	const navigate = useNavigate();

	if (isCheckingAuth) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}

	if (!authUser || authUser.role !== "ADMIN") {
		navigate("/");
	}

	return children;
};

export default AdminRoute;
