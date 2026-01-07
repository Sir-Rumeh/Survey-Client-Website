import React from "react";

const tiers = [
	{ title: "1 - 5 Questions", price: "—" },
	{ title: "6 - 10 Questions", price: "—" },
	{ title: "11 - 15 Questions", price: "—" },
	{ title: "16 - 20 Questions", price: "—" },
	{ title: "21 - 30 Questions", price: "N250 per respondent" },
	{ title: "31 - 40 Questions", price: "—" },
	{ title: "41 - 50 Questions", price: "—" },
];

const Pricing: React.FC = () => {
	return (
		<section className="py-16">
			<div className="max-w-4xl mx-auto">
				<h3 className="text-2xl font-bold">Cost Schedule</h3>
				<p className="mt-2 text-[var(--muted)]">
					We deliver data and actionable insight to organisations and researchers in a timely manner.
				</p>

				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
					{tiers.map((t) => (
						<div key={t.title} className="p-4 border border-[var(--border)] rounded bg-[var(--card)]">
							<div className="flex items-center justify-between">
								<div className="font-medium">{t.title}</div>
								<div className="text-sm text-[var(--muted)]">{t.price}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
