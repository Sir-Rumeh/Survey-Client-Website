import React from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

const Navbar: React.FC = () => {
	const toggleTheme = () => {
		const el = document.documentElement;
		if (el.classList.contains("dark")) {
			el.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			el.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
	};

	return (
		<header className="py-6">
			<div className="flex items-center justify-between container mx-auto px-4">
				<Link href="#">
					<a className="flex items-center gap-3">
						<div className="w-8 h-8 rounded-md bg-[var(--primary)]"></div>
						<span className="font-bold text-lg">SurveyPlus</span>
					</a>
				</Link>

				<nav className="hidden md:flex items-center gap-6 text-sm">
					<a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)]">
						About us
					</a>
					<a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)]">
						Overview
					</a>
					<a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)]">
						Blog
					</a>
					<a href="#" className="text-[var(--muted)] hover:text-[var(--foreground)]">
						Contact
					</a>
				</nav>

				<div className="flex items-center gap-3">
					<button
						aria-label="toggle theme"
						onClick={toggleTheme}
						className="p-2 rounded-md hover:bg-[var(--card)]"
					>
						<Sun className="w-5 h-5" />
					</button>
					<a href="#" className="px-4 py-2 bg-[var(--primary)] text-white rounded-md">
						Sign up
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
