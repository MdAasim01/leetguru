import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import {
	HomePage,
	LoginPage,
	SignUpPage,
	AdminRoute,
	AddProblem,
	ProfilePage,
	ProtectedRoute,
	ProblemSolvingPage,
	PlaylistsPage,
	EditProfilePage,
	NewLanding
} from "./page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: (
					<ProtectedRoute authentication={false}>
						<NewLanding />
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
				path: "landing",
				element: (
					<ProtectedRoute authentication={false}>
						<NewLanding />
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
				path: "problem-solve/:id",
				element: (
					<ProtectedRoute authentication showHeader={false}>
						<ProblemSolvingPage />
					</ProtectedRoute>
				),
			},
			{
				path: "problem/:id",
				element: (
					<ProtectedRoute authentication showHeader={false}>
						<ProblemSolvingPage />
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
					<ProtectedRoute authentication>
						<PlaylistsPage />
					</ProtectedRoute>
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
