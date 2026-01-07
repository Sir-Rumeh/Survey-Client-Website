import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	// Ensure dark class is synced with user preference (simple client side init)
	useEffect(() => {
		const stored = localStorage.getItem("theme");
		if (stored === "dark") document.documentElement.classList.add("dark");
	}, []);

	return <Component {...pageProps} />;
}
