// src/hooks/useGoogleLogin.ts

import { useEffect } from "react";
import { GoogleCredentialResponse } from "@/types/auth";

// Extend the window object to include the Google Identity Services functions
declare global {
	interface Window {
		google: any;
	}
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

interface UseGoogleLoginProps {
	onSuccess: (response: GoogleCredentialResponse) => void;
	onError: () => void;
}

export const useGoogleLogin = ({ onSuccess, onError }: UseGoogleLoginProps) => {
	// useEffect(() => {
	// 	if (window.google && GOOGLE_CLIENT_ID) {
	// 		// 1. Initialize the Google Identity Services client
	// 		window.google.accounts.id.initialize({
	// 			client_id: GOOGLE_CLIENT_ID,
	// 			callback: onSuccess,
	// 			onError: onError,
	// 		});
	// 		// 2. Render the Google Sign-In button
	// 		window.google.accounts.id.renderButton(document.getElementById("google-signin-button"), {
	// 			theme: "outline", // Required for a bordered, neutral look.
	// 			size: "large", // A good height for a large button.
	// 			type: "standard", // Shows full text.
	// 			text: "signin_with", // Standard call-to-action.
	// 			shape: "rectangular", // Standard shape.
	// 		});
	// 		// 3. Optional: Trigger the One Tap prompt
	// 		// window.google.accounts.id.prompt();
	// 	} else {
	// 		console.error("Google Identity Services script not loaded.");
	// 		onError();
	// 	}
	// }, [onSuccess, onError]);
};
