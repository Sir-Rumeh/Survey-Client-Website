import type { AxiosResponse } from "axios";
import AxiosClient from "./blog-axios-client";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const getUserSurveys = async (page: number): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.get("/api/my-surveys", {
			params: { page },
		});
		return response;
	} catch (error) {
		console.error("Fetching survey failed:", error);
		throw error;
	}
};

export const viewSurveyDetails = async (id: number | string): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.get("/api/view-surveys", {
			params: { survey_id: id },
		});
		return response;
	} catch (error) {
		console.error("Fetching survey details failed:", error);
		throw error;
	}
};

export const getSurveyPropertyDetails = async (id: number | string): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.get("/api/properties/survey-properties", {
			params: { survey_id: id },
		});
		return response;
	} catch (error) {
		console.error("Fetching survey property details failed:", error);
		throw error;
	}
};

export const getSurveyRespondents = async (id: number | string): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await AxiosClient.get("/api/admin/survey-responds-users", {
			params: { survey_id: id },
		});
		return response;
	} catch (error) {
		console.error("Fetching survey failed:", error);
		throw error;
	}
};

export const submitSurveyResponse = async (payload: any): Promise<any> => {
	const url = "/api/submit-responds";
	try {
		const response: AxiosResponse<any> = await AxiosClient.post(url, payload);
		return response;
	} catch (error) {
		console.error("Failed to submit response:", error);
		throw error;
	}
};
