import React from "react";
import { Check } from "lucide-react";

const Hero: React.FC = () => {
	return (
		<section className="pt-12 pb-16">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<div>
					<h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
						Data and Insights
						<br /> Delivered.
					</h1>
					<p className="mt-4 text-[var(--muted)] max-w-prose">
						SurveyPlus presents opportunities for organisations and individuals to have fast and easy
						access to respondents suitable for their surveys anywhere.
					</p>

					<div className="mt-6 flex gap-4">
						<a className="px-6 py-3 bg-[var(--accent)] text-white rounded-md">Conduct Survey</a>
						<a className="px-6 py-3 bg-[var(--primary)] text-white rounded-md">Take Survey</a>
					</div>

					<div className="mt-8 grid grid-cols-2 gap-4">
						<div className="p-4 bg-[var(--card)] rounded shadow border border-[var(--border)]">
							<div className="text-sm font-bold">10k+</div>
							<div className="text-[var(--muted)] text-sm">Registered Users</div>
						</div>
						<div className="p-4 bg-[var(--card)] rounded shadow border border-[var(--border)]">
							<div className="text-sm font-bold">Responses You Can Trust</div>
						</div>
					</div>
				</div>

				<div className="order-first lg:order-last">
					<div className="w-full h-80 bg-[var(--card)] rounded-lg border border-[var(--border)] flex items-center justify-center">
						{/* Placeholder for hero device images */}
						<span className="text-[var(--muted)]">[Hero devices image placeholder]</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
