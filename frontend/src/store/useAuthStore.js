import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
	authUser: null,
	authStatus: false,
	isSigninUp: false,
	isLoggingIn: false,
	isCheckingAuth: false,

	setAuthUser: (user) => set({ authUser: user }),
	setAuthStatus: (status) => set({ authStatus: status }),
	setIsCheckingAuth: (val) => set({ isCheckingAuth: val }),

	checkAuth: async () => {
		set({ isCheckingAuth: true });
		try {
			const res = await axiosInstance.get("/auth/check");
			console.log("checkauth response", res.data);

			set({ authUser: res.data.user });
			set({ authStatus: true });
		} catch (error) {
			console.log("❌ Error checking auth:", error);
			set({ authUser: null });
			set({ authStatus: false });
		} finally {
			set({ isCheckingAuth: false });
		}
	},

	signup: async (data) => {
		set({ isSigninUp: true });
		try {
			const res = await axiosInstance.post("/auth/register", data);

			set({ authUser: res.data.user });
			set({ authStatus: true });

			toast.success(res.data.message);
		} catch (error) {
			console.log("Error signing up", error);
			toast.error("Error signing up");
		} finally {
			set({ isSigninUp: false });
		}
	},

	login: async (data) => {
		set({ isCheckingAuth: true });
		try {
			const res = await axiosInstance.post("/auth/login", data);

			console.log("Login response", res.data);

			set({ authUser: res.data.user });
			set({ authStatus: true });

			toast.success(res.data.message);
		} catch (error) {
			console.log("Error logging in", error);
			toast.error("Error logging in");
		} finally {
			set({ isCheckingAuth: false });
		}
	},

	logout: async () => {
		try {
			await axiosInstance.post("/auth/logout");
			set({ authUser: null });
			set({ authStatus: false });

			toast.success("Logout successful");
		} catch (error) {
			console.log("Error logging out", error);
			toast.error("Error logging out");
		}
	},
}));
