import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
	onChange: (token: string | null) => void;
}

const Captcha: React.FC<CaptchaProps> = ({ onChange }) => {
	const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

	if (!siteKey) {
		console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined in environment variables.");
		return null;
	}

	return (
		<div className="mt-4 mb-4">
			<ReCAPTCHA sitekey={siteKey} onChange={onChange} />
		</div>
	);
};

export default Captcha;
