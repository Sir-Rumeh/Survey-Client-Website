import React, { useState } from "react";
import Link from "next/link";

type WebsiteLayoutProps = {
	children?: React.ReactNode;
};

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
			<header className="w-full md:sticky md:top-0 md:z-40 bg-red-400">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="bg-white/90 backdrop-blur rounded-lg shadow-md px-4 py-3 flex items-center justify-between">
						<div className="flex items-center gap-4">
							<Link href="/" className="flex items-center gap-2">
								<div className="w-10 h-10 rounded bg-red-500 flex items-center justify-center text-white font-bold text-destructive">
									SP
								</div>
								<div className="hidden sm:block">
									<span className="text-emerald-700 font-semibold">Survey</span>
									<span className="text-emerald-400 ml-1">Plus</span>
								</div>
							</Link>
						</div>

						<nav className="hidden md:flex items-center space-x-6">
							<Link href="/" className="text-emerald-700 font-medium hover:text-emerald-900">
								Home
							</Link>
							<Link href="/about" className="text-emerald-700 font-medium hover:text-emerald-900">
								About us
							</Link>
							<Link
								href="/overview"
								className="text-emerald-700 font-medium hover:text-emerald-900"
							>
								Overview
							</Link>
							<Link href="/blog" className="text-emerald-700 font-medium hover:text-emerald-900">
								Blog
							</Link>
							<Link
								href="/contact"
								className="text-emerald-700 font-medium hover:text-emerald-900"
							>
								Contact
							</Link>
						</nav>

						<div className="hidden md:flex items-center gap-3">
							<Link
								href="/login"
								className="px-4 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700"
							>
								Log In
							</Link>
							<Link
								href="/signup"
								className="px-4 py-1 rounded border border-emerald-600 text-primary hover:bg-emerald-50"
							>
								Sign Up
							</Link>
						</div>

						<div className="md:hidden">
							<button
								aria-label="Toggle menu"
								onClick={() => setOpen((s) => !s)}
								className="p-2 rounded text-emerald-700 hover:bg-emerald-100"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
									/>
								</svg>
							</button>
						</div>
					</div>

					{/* Mobile menu */}
					{open && (
						<div className="bg-white/90 mt-2 rounded-lg shadow-md p-4 md:hidden">
							<nav className="flex flex-col gap-3">
								<Link
									href="/"
									onClick={() => setOpen(false)}
									className="text-emerald-700 font-medium"
								>
									Home
								</Link>
								<Link
									href="/about"
									onClick={() => setOpen(false)}
									className="text-emerald-700 font-medium"
								>
									About us
								</Link>
								<Link
									href="/overview"
									onClick={() => setOpen(false)}
									className="text-emerald-700 font-medium"
								>
									Overview
								</Link>
								<Link
									href="/blog"
									onClick={() => setOpen(false)}
									className="text-emerald-700 font-medium"
								>
									Blog
								</Link>
								<Link
									href="/contact"
									onClick={() => setOpen(false)}
									className="text-emerald-700 font-medium"
								>
									Contact
								</Link>
								<div className="flex gap-2 pt-2">
									<Link
										href="/login"
										onClick={() => setOpen(false)}
										className="flex-1 text-center px-4 py-2 rounded bg-emerald-600 text-white"
									>
										Log In
									</Link>
									<Link
										href="/signup"
										onClick={() => setOpen(false)}
										className="flex-1 text-center px-4 py-2 rounded border border-emerald-600 text-emerald-600"
									>
										Sign Up
									</Link>
								</div>
							</nav>
						</div>
					)}
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">{children}</main>
		</div>
	);
}
