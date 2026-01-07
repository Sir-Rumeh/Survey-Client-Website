import React from "react";
import { CheckCircle } from "lucide-react";

const features = ["Effortless data collection", "Optional rewards for respondents", "Collaborative workflow"];

const Features: React.FC = () => {
	return (
		<section className="py-16">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-2xl font-bold">Access Respondents Suitable for your Surveys on Our Platform</h2>
				<p className="mt-4 text-[var(--muted)]">
					SurveyPlus presents opportunities for organisations and individuals to have fast and easy
					access to respondents suitable for their surveys anywhere.
				</p>

				<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
					{features.map((f) => (
						<div key={f} className="p-6 bg-[var(--card)] rounded border border-[var(--border)]">
							<div className="flex items-center gap-3">
								<CheckCircle className="w-6 h-6 text-[var(--primary)]" />
								<div className="font-semibold">{f}</div>
							</div>
							<p className="mt-3 text-[var(--muted)] text-sm">
								Detailed description about {f.toLowerCase()}.
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
