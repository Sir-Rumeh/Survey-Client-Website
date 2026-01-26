import axios from "axios";
import toast from "react-hot-toast";

const AxiosClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
});

const getStoredToken = () => {
	if (typeof window !== "undefined") {
		return window.sessionStorage.getItem("SURVEY_API_TOKEN");
	}
	return null;
};

const setStoredToken = (token: string, expiresIn?: number) => {
	if (typeof window !== "undefined") {
		window.sessionStorage.setItem("SURVEY_API_TOKEN", token);
		if (expiresIn) {
			window.sessionStorage.setItem("SURVEY_API_TOKEN_EXPIRES_AT", String(Date.now() + expiresIn * 1000));
		}
	}
};

const loginAndGetToken = async (): Promise<string | null> => {
	const username = process.env.NEXT_PUBLIC_SURVEY_API_USERNAME ?? "";
	const password = process.env.NEXT_PUBLIC_SURVEY_API_PASSWORD ?? "";

	try {
		const resp = await axios.post(
			"https://surveyapi.unlimitedresource.com.ng/auth/login",
			{ username, password },
			{ withCredentials: true },
		);

		const { access_token, expires_in } = resp.data;
		if (access_token) {
			setStoredToken(access_token, expires_in);
			return access_token;
		}
		return null;
	} catch (err) {
		console.error("Login failed:", err);
		return null;
	}
};

AxiosClient.interceptors.request.use(
	async (config) => {
		if (typeof navigator !== "undefined" && !navigator.onLine) {
			throw new Error("Please check your Internet Connection");
		}

		if (config.method === "post" && !config.headers["Content-Type"]) {
			config.headers["Content-Type"] = "application/x-www-form-urlencoded";
		}

		const token = getStoredToken();

		if (token && !config.headers.Authorization) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => Promise.reject(error),
);

AxiosClient.interceptors.response.use(
	(response) => response.data,
	async (error) => {
		const originalRequest = error.config;
		const status = error.response?.status;

		if (status === 401) {
			const newToken = await loginAndGetToken();

			if (newToken) {
				originalRequest.headers.Authorization = `Bearer ${newToken}`;
				return AxiosClient(originalRequest);
			}
		}

		const errorMessage = error.response?.data?.message || error.response?.data?.error || "Something went wrong";

		if (status === 400 && error.response?.data?.errors) {
			const firstError = Object.values(error.response.data.errors)[0];
			toast.error(Array.isArray(firstError) ? firstError[0] : "Validation Error");
		} else {
			toast.error(errorMessage);
		}

		return Promise.reject(error);
	},
);

export default AxiosClient;
