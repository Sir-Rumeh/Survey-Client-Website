import React from "react";

const Stats: React.FC = () => {
	return (
		<section className="py-12">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="p-6 bg-[var(--card)] rounded border border-[var(--border)] text-center">
					<div className="text-3xl font-bold">10k+</div>
					<div className="text-[var(--muted)]">Registered Users</div>
				</div>
				<div className="p-6 bg-[var(--card)] rounded border border-[var(--border)] text-center">
					<div className="text-3xl font-bold">Responses</div>
					<div className="text-[var(--muted)]">You Can Trust</div>
				</div>
				<div className="p-6 bg-[var(--card)] rounded border border-[var(--border)] text-center">
					<div className="text-3xl font-bold">Available on</div>
					<div className="mt-2 flex items-center justify-center gap-3">
						<div className="w-28 h-10 bg-[var(--border)] rounded flex items-center justify-center">
							Google Play
						</div>
						<div className="w-28 h-10 bg-[var(--border)] rounded flex items-center justify-center">
							App Store
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
