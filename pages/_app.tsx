import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import WebsiteLayout from "../src/layout/WebsiteLayout";

export default function App({ Component, pageProps }: AppProps) {
	// Ensure dark class is synced with user preference (simple client side init)
	useEffect(() => {
		const stored = localStorage.getItem("theme");
		if (stored === "dark") document.documentElement.classList.add("dark");
	}, []);

	return (
		<WebsiteLayout>
			<Component {...pageProps} />
		</WebsiteLayout>
	);
}
