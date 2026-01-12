import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoSidebar from "@/components/shared/logo-sidebar";

const Navbar = () => {
	const router = useRouter();

	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "About us", href: "/about" },
		{ label: "Blog", href: "/blog" },
		{ label: "Contact", href: "/contact" },
	];

	const respondentsAppUrl = process.env.NEXT_PUBLIC_APP_RESPONDENTS_BASE_URL || "";

	return (
		<nav className="max-w-7xl mx-auto mt-6 px-4 md:sticky md:top-0 md:z-40">
			<div className="bg-white/80 backdrop-blur-md rounded-xl py-1 px-6 flex items-center justify-between shadow-sm border border-white">
				<div className="flex items-center gap-2">
					<LogoSidebar />
				</div>

				<div className="hidden md:flex items-center gap-8 text-green-800 font-medium">
					{navLinks.map((link) => {
						const isActive = router.pathname === link.href;

						return (
							<Link
								key={link.href}
								href={link.href}
								className={`transition hover:text-green-600 ${
									isActive ? "text-green-600 border-b-2 border-green-600" : ""
								}`}
							>
								{link.label}
							</Link>
						);
					})}
				</div>

				<div className="flex items-center gap-3">
					<button
						onClick={() => window.open(`${respondentsAppUrl}/auth/login`, "_blank")}
						className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition"
					>
						Log In
					</button>
					<button
						onClick={() => window.open(`${respondentsAppUrl}/auth/register`, "_blank")}
						className="border border-green-600 text-green-700 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition"
					>
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
