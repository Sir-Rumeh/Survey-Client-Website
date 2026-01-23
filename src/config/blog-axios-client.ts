import axios from "axios";
import toast from "react-hot-toast";

const AxiosClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
	headers: {},
});

// Ensure form-urlencoded is the default for POST requests expected by the API
AxiosClient.defaults.headers = AxiosClient.defaults.headers || {};
AxiosClient.defaults.headers.post = AxiosClient.defaults.headers.post || {};
AxiosClient.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// Token cache and expiry tracking
let tokenCache: { token: string; expiry?: number } | null = null;

const persistToken = (token: string, expiresIn?: number) => {
	tokenCache = { token, expiry: expiresIn ? Date.now() + expiresIn * 1000 : undefined };
	try {
		if (typeof window !== "undefined" && window.sessionStorage) {
			window.sessionStorage.setItem("SURVEY_API_TOKEN", token);
			if (expiresIn)
				window.sessionStorage.setItem("SURVEY_API_TOKEN_EXPIRES_AT", String(Date.now() + expiresIn * 1000));
		}
	} catch (e) {
		// ignore storage errors
	}
	// also set default Authorization for axios client
	AxiosClient.defaults.headers.common = AxiosClient.defaults.headers.common || {};
	AxiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const readPersistedToken = (): string | null => {
	try {
		if (typeof window !== "undefined" && window.sessionStorage) {
			return window.sessionStorage.getItem("SURVEY_API_TOKEN");
		}
	} catch (e) {
		// ignore
	}
	return null;
};

const fetchNewToken = async (): Promise<string> => {
	const username = process.env.NEXT_PUBLIC_SURVEY_API_USERNAME ?? "";
	const password = process.env.NEXT_PUBLIC_SURVEY_API_PASSWORD ?? "";
	try {
		const resp = await axios.post("https://surveyapi.unlimitedresource.com.ng/auth/login", {
			username,
			password,
		});
		const data = resp?.data;
		const token = data?.access_token;
		const expiresIn = data?.expires_in;
		if (!token) throw new Error("No access_token returned from auth API");
		persistToken(token, expiresIn);
		return token;
	} catch (err) {
		console.error("Failed to fetch auth token:", err);
		throw err;
	}
};

const getSession = async (): Promise<{ token: string } | null> => {
	// check in-memory cache first
	if (tokenCache?.token) {
		if (!tokenCache.expiry || Date.now() < tokenCache.expiry) return { token: tokenCache.token };
		// expired, clear and fallthrough
		tokenCache = null;
	}

	// check persisted storage
	const persisted = readPersistedToken();
	if (persisted) {
		// If we have a persisted token, assume valid (we'll handle 401 on responses)
		persistToken(persisted);
		return { token: persisted };
	}

	// otherwise fetch a new token
	try {
		const token = await fetchNewToken();
		return { token };
	} catch (err) {
		return null;
	}
};

AxiosClient.interceptors.request.use(
	async (request) => {
		if (typeof navigator !== "undefined" && !navigator.onLine) {
			throw new Error("Please check your Internet Connection");
		}
		try {
			const session = await getSession();
			if (session?.token) {
				request.headers = request.headers || {};
				// (request.headers as any).Authorization = `Bearer ${session.token}`;
			}
			(request.headers as any).Authorization =
				`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXJ2ZXl3ZWJhcGkiLCJzdWIiOjQyLCJpYXQiOjE3NjkxODU4ODMsIm5iZiI6MTc2OTE4NTg4MywiZXhwIjoxNzY5MTg5NDgzLCJ1c2VybmFtZSI6ImFkbWluIn0.SWbZAkPk8q0MZkUQh6FLwBGqaGLjxXKG3jD7cJmWC9k`;
		} catch (error) {
			console.log("error getting session:", error);
		}
		return request;
	},
	(error) => Promise.reject(error),
);

AxiosClient.interceptors.response.use(
	(response) => {
		const reponseData = response.data;
		// normalize only successful responses
		return reponseData;
	},
	async (error) => {
		const originalRequest = error?.config;
		const status = error?.response?.status;
		// attempt token refresh + retry once on 401
		if (status === 401 && originalRequest && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				const newToken = await fetchNewToken();
				if (newToken) {
					originalRequest.headers = originalRequest.headers || {};
					originalRequest.headers.Authorization = `Bearer ${newToken}`;
					return AxiosClient(originalRequest);
				}
			} catch (e) {
				// fall through to default error handling
			}
		}

		// existing error handling
		if (status === 400) {
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
		} else if (status === 401) {
			toast.error(error?.response?.data?.error ?? "Unauthorized");
			return Promise.reject(error);
		} else if (status === 404) {
			toast.error(error?.response?.data?.message ?? "Resource not found");
			return Promise.reject(error);
		} else if (status === 500) {
			toast.error("Something went wrong");
			return Promise.reject(error);
		} else {
			toast.error(error?.response?.data?.error ? error.response.data.error : "Something went wrong");
			return Promise.reject(error);
		}
	},
);

export default AxiosClient;
