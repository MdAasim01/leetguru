import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://srv697867.hstgr.cloud/leetguru/api/v1",
	withCredentials: true,
});
