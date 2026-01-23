import type { AxiosResponse } from "axios";
import AxiosClient from "./blog-axios-client";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const initiateWithdrawal = async (payload: any, method: string): Promise<any> => {
	const url = `/v1/points/init-withdrawal/${method}`;
	try {
		const response: AxiosResponse<any> = await AxiosClient.post(url, payload);
		return response;
	} catch (error) {
		console.error("Failed to initiate withdrawal:", error);
		return Promise.reject(error);
	}
};

export const updateProfilePic = async (payload: any): Promise<any> => {
	const url = "/api/add-profilepic";
	try {
		const response: AxiosResponse<any> = await AxiosClient.post(url, payload);
		return response;
	} catch (error) {
		console.error("Failed to update profile pic:", error);
		throw error;
	}
};

export const updateSponsorType = async (payload: any): Promise<any> => {
	const url = "/api/add-sponsor-type";
	try {
		const response: AxiosResponse<any> = await AxiosClient.post(url, payload);
		return response;
	} catch (error) {
		console.error("Failed to update sponsor type:", error);
		throw error;
	}
};

export const updateLocation = async (payload: any): Promise<any> => {
	const url = "/api/add-location";
	try {
		const response: AxiosResponse<any> = await AxiosClient.post(url, payload);
		return response;
	} catch (error) {
		console.error("Failed to update location:", error);
		throw error;
	}
};
export const updatePhoneNumber = async (payload: any): Promise<any> => {
	const url = "/api/add-phone-number";
	try {
		const response: AxiosResponse<any> = await AxiosClient.post(url, payload);
		return response;
	} catch (error) {
		console.error("Failed to update phone number:", error);
		throw error;
	}
};
