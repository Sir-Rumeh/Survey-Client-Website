import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["surveyapi.unlimitedresource.com.ng"],
	},
	// experimental: {
	// 	appDir: false,
	// },
};

export default nextConfig;
