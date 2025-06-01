import axios from "axios";

export const axiosInstance = axios.create({
	baseURL:
		import.meta.env.MODE === "development"
			? "https://srv697867.hstgr.cloud/leetguru/api/v1"
			: "/api/v1",
	withCredentials: true,
});
