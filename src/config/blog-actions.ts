import type { AxiosResponse } from "axios";
import AxiosClient from "./blog-axios-client";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const getRecentBlogPosts = async (payload: any): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.post("/api/blog/getBlogs", payload);
		return response;
	} catch (error) {
		console.error("Fetching recent posts failed:", error);
		throw error;
	}
};

export const getPopularBlogs = async (payload: any): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.post("/api/blog/popularBlogs", payload);
		return response;
	} catch (error) {
		console.error("Fetching popular blogs failed:", error);
		throw error;
	}
};

export const searchBlogs = async (payload: any): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.post("/api/blog/searchBlogs", payload);
		return response;
	} catch (error) {
		console.error("Searching blogs failed:", error);
		throw error;
	}
};

export const postBlogComment = async (payload: any): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.post("/api/blog/postBlogComment", payload);
		return response;
	} catch (error) {
		console.error("Posting blog comment failed:", error);
		throw error;
	}
};

export const fetchCommentsByBlog = async (blogId: string | number): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.get(`/api/blog/fetchCommentsByBlog/${blogId}`);
		return response;
	} catch (error) {
		console.error(`Fetching comments for blog ${blogId} failed:`, error);
		throw error;
	}
};

export const fetchAllBlogs = async (): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.get("/api/blog/fetchBlogs");
		return response;
	} catch (error) {
		console.error("Fetching all blogs failed:", error);
		throw error;
	}
};

export const getBlogById = async (blogId: string | number): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.get(`/api/blog/getBlog/${blogId}`);
		return response;
	} catch (error) {
		console.error(`Fetching blog with id ${blogId} failed:`, error);
		throw error;
	}
};
