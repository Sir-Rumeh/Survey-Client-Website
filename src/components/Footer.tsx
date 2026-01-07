import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="py-12 mt-16 border-t border-[var(--border)]">
			<div className="container mx-auto px-4 text-sm text-[var(--muted)]">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="font-bold">SurveyPlus</div>
					<div className="flex items-center gap-4">
						<a href="#">Home</a>
						<a href="#">About Us</a>
						<a href="#">Contact</a>
					</div>
					<div>© {new Date().getFullYear()} SurveyPlus. All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
