import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import AdminRoute from "./components/AdminRoute";
import AddProblem from "./page/AddProblem";
import ProblemPage from "./page/ProblemPage";
import LandingPage from "./page/LandingPage";
import ProfilePage from "./page/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ProblemSolvingPage from "./page/ProblemSolvingPage";
import PlaylistsPage from "./page/PlaylistPage";
import EditProfilePage from "./page/EditProfilePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: (
					<ProtectedRoute authentication={false}>
						<LandingPage />
					</ProtectedRoute>
				),
			},
			{
				path: "login",
				element: (
					<ProtectedRoute authentication={false}>
						<LoginPage />
					</ProtectedRoute>
				),
			},
			{
				path: "signup",
				element: (
					<ProtectedRoute authentication={false}>
						<SignUpPage />
					</ProtectedRoute>
				),
			},
			{
				path: "all-problems",
				element: (
					<ProtectedRoute authentication>
						<HomePage />
					</ProtectedRoute>
				),
			},
			{
				path: "profile",
				element: (
					<ProtectedRoute authentication>
						<ProfilePage />
					</ProtectedRoute>
				),
			},
			{
				path: "edit-profile",
				element: (
					<ProtectedRoute authentication>
						<EditProfilePage />
					</ProtectedRoute>
				),
			},
			{
				path: "problem-solve",
				element: (
					<ProtectedRoute authentication>
						<ProblemSolvingPage />
					</ProtectedRoute>
				),
			},
			{
				path: "problem/:id",
				element: (
					<ProtectedRoute authentication>
						<ProblemPage />
					</ProtectedRoute>
				),
			},
			{
				path: "add-problem",
				element: (
					<AdminRoute>
						<AddProblem />
					</AdminRoute>
				),
			},
			{
				path: "playlists",
				element: (
					<AdminRoute>
						<PlaylistsPage />
					</AdminRoute>
				),
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
