import axios from "axios";

export const axiosInstance = axios.create({
	baseURL:
		import.meta.env.MODE === "development"
			? "http://193.46.198.253:8080/api/v1"
			: "/api/v1",
	withCredentials: true,
});
