import AxiosClient from "./blog-axios-client";

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Blog {
	blog_id: string;
	blog_title: string;
	blog_content: string;
	blog_pic: string;
	is_popular: string;
	added_time: string;
	blog_urltitle?: string;
}

export interface BlogComment {
	blog_comment_id: string;
	blog_commentor_name: string;
	blog_commentor_email: string;
	blog_commentor_comment: string;
	blog_id: string;
	added_time: string;
}

const toUrlEncoded = (payload: Record<string, any>) => {
	const params = new URLSearchParams();
	Object.entries(payload || {}).forEach(([key, value]) => {
		if (value === undefined || value === null) return;
		params.append(key, String(value));
	});
	return params;
};

const unwrapData = (res: any) => {
	if (!res) return res;
	if (typeof res === "object" && Object.prototype.hasOwnProperty.call(res, "data")) {
		return (res as any).data;
	}
	return res;
};

export const getRecentBlogPosts = async (payload: { numOfBlogs?: number } = {}): Promise<Blog[]> => {
	try {
		const body = toUrlEncoded(payload);
		const res = await AxiosClient.post("/api/blog/getBlogs", body);
		const unwrapped = unwrapData(res);
		const data = Array.isArray(unwrapped)
			? unwrapped
			: (unwrapped?.blogs ?? unwrapped?.results ?? unwrapped ?? []);
		return data as Blog[];
	} catch (error) {
		console.error("Fetching recent posts failed:", error);
		throw error;
	}
};

export const getPopularBlogs = async (payload: { numOfBlogs?: number } = {}): Promise<Blog[]> => {
	try {
		const body = toUrlEncoded(payload);
		const res = await AxiosClient.post("/api/blog/popularBlogs", body);
		const unwrapped = unwrapData(res);
		const data = Array.isArray(unwrapped) ? unwrapped : (unwrapped?.blogs ?? unwrapped ?? []);
		return data as Blog[];
	} catch (error) {
		console.error("Fetching popular blogs failed:", error);
		throw error;
	}
};
export const getOtherBlogs = async (payload: { numOfBlogs?: number } = {}): Promise<Blog[]> => {
	try {
		const body = toUrlEncoded(payload);
		const res = await AxiosClient.post("/api/blog/fetchBlogs", body);
		const unwrapped = unwrapData(res);
		const data = Array.isArray(unwrapped) ? unwrapped : (unwrapped?.blogs ?? unwrapped ?? []);
		return data as Blog[];
	} catch (error) {
		console.error("Fetching other blogs failed:", error);
		throw error;
	}
};

export const searchBlogs = async (payload: { keyword: string }): Promise<Blog[]> => {
	try {
		const body = toUrlEncoded(payload as Record<string, any>);
		const res = await AxiosClient.post("/api/blog/searchBlogs", body);
		const unwrapped = unwrapData(res);
		const data = Array.isArray(unwrapped) ? unwrapped : (unwrapped?.blogs ?? unwrapped ?? []);
		return data as Blog[];
	} catch (error) {
		console.error("Searching blogs failed:", error);
		throw error;
	}
};

export const postBlogComment = async (payload: {
	name: string;
	email: string;
	comment: string;
	blogid: string | number;
	added_time: string | number;
}): Promise<{ success?: boolean; message?: string } | any> => {
	try {
		const body = toUrlEncoded(payload as Record<string, any>);
		const res = await AxiosClient.post("/api/blog/postBlogComment", body);
		return unwrapData(res);
	} catch (error) {
		console.error("Posting blog comment failed:", error);
		throw error;
	}
};

export const fetchCommentsByBlog = async (blogId: string | number): Promise<BlogComment[]> => {
	try {
		const res = await AxiosClient.get(`/api/blog/fetchCommentsByBlog/${blogId}`);
		const unwrapped = unwrapData(res);
		const data = Array.isArray(unwrapped) ? unwrapped : (unwrapped?.comments ?? unwrapped ?? []);
		return data as BlogComment[];
	} catch (error) {
		console.error(`Fetching comments for blog ${blogId} failed:`, error);
		throw error;
	}
};

export const fetchAllBlogs = async (): Promise<Blog[]> => {
	try {
		const res = await AxiosClient.get("/api/blog/fetchBlogs");
		const unwrapped = unwrapData(res);
		const data = Array.isArray(unwrapped) ? unwrapped : (unwrapped?.blogs ?? unwrapped ?? []);
		return data as Blog[];
	} catch (error) {
		console.error("Fetching all blogs failed:", error);
		throw error;
	}
};

export const getBlogById = async (blogId: string | number): Promise<Blog | null> => {
	try {
		const res = await AxiosClient.get(`/api/blog/getBlog/${blogId}`);
		const unwrapped = unwrapData(res);
		const data = unwrapped && !Array.isArray(unwrapped) ? (unwrapped?.data ?? unwrapped) : (unwrapped ?? null);
		return data as Blog | null;
	} catch (error) {
		console.error(`Fetching blog with id ${blogId} failed:`, error);
		throw error;
	}
};
