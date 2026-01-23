import axios from "axios";
import toast from "react-hot-toast";
// import { getSession } from "next-auth/react";

const AxiosClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
	headers: {
		// "Content-Type": "application/json",
		// Accept: "application/json",
	},
});

const getSession = () => {
	// Mock function to simulate session retrieval
	return {
		token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXJ2ZXl3ZWJhcGkiLCJzdWIiOjQyLCJpYXQiOjE3NjkwMjQxOTAsIm5iZiI6MTc2OTAyNDE5MCwiZXhwIjoxNzY5MDI3NzkwLCJ1c2VybmFtZSI6ImFkbWluIn0.A7r8lj__EV5wbuuhVbQqBs7oOOqguu19NtMmTF_20Z0",
	};
};

AxiosClient.interceptors.request.use(
	async (request) => {
		if (!navigator.onLine) {
			throw new Error("Please check your Internet Connection");
		}
		try {
			const session = getSession();
			if (session) {
				const token = session.token;
				request.headers.Authorization = `Bearer ${token}`;
			}
		} catch (error) {
			console.log("error:", error);
		}
		return request;
	},
	(error) => {
		return Promise.reject(error);
	},
);

AxiosClient.interceptors.response.use(
	(response) => {
		const reponseData = response.data;
		console.log("response", response.data);
		if (response.status !== 200) {
			return;
		}
		return reponseData;
	},
	async (error) => {
		console.log("error response", error?.response);
		if (error?.response?.status === 400) {
			const objectData = error?.response?.data?.errors;
			const objectValues = Object.values(objectData ?? {}) as any[];
			const objectMessage = objectValues[0];
			if (Array.isArray(objectMessage)) {
				toast.error(objectMessage[0] ?? "Request failed");
			} else if (typeof objectMessage === "string") {
				toast.error(objectMessage);
			} else {
				toast.error("Request failed");
			}
			return Promise.reject(error);
		} else if (error?.response?.status === 401) {
			toast.error(error?.response?.data.error);
			return Promise.reject(error);
		} else if (error?.response?.status === 404) {
			toast.error(error?.response?.data?.message ?? "Resource not found");
			return Promise.reject(error);
		} else if (error?.response?.status === 500) {
			toast.error("Something went wrong");
			return Promise.reject(error);
		} else {
			toast.error(error?.response?.data?.error ? error.response.data.error : "Something went wrong");
			return Promise.reject(error);
		}
	},
);

export default AxiosClient;
