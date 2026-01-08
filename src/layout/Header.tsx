import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Menu, X } from "lucide-react";

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-5 z-50 w-[95%] border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center gap-2">
						<CheckCircle2 className="h-8 w-8 text-[hsl(var(--primary))]" />
						<span className="text-xl font-bold text-[var(--foreground)]">SurveyPlus</span>
					</div>

					{/* Navigation */}
					<nav className="hidden md:flex items-center gap-6">
						<a
							href="#home"
							className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
						>
							Home
						</a>
						<a
							href="#about"
							className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
						>
							About us
						</a>
						<a
							href="#overview"
							className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
						>
							Overview
						</a>
						<a
							href="#blog"
							className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
						>
							Blog
						</a>
						<a
							href="#contact"
							className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
						>
							Contact
						</a>
					</nav>

					{/* CTA Buttons */}
					<div className="flex items-center gap-3">
						<Button
							// variant="outline"
							className="hidden sm:inline-flex border-[hsl(var(--primary))] text-[hsl(var(--primary))]"
						>
							Log in
						</Button>
						<Button className="bg-[hsl(var(--primary))] text-white hidden sm:inline-flex">
							Sign up
						</Button>
						<Button
							// variant="ghost"
							// size="icon"
							className="md:hidden"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden border-t border-[var(--border)] py-4 space-y-4">
						<nav className="flex flex-col gap-4">
							<a
								href="#home"
								className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								Home
							</a>
							<a
								href="#about"
								className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								About us
							</a>
							<a
								href="#overview"
								className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								Overview
							</a>
							<a
								href="#blog"
								className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								Blog
							</a>
							<a
								href="#contact"
								className="text-sm font-medium text-[var(--foreground)] hover:text-[hsl(var(--primary))] transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								Contact
							</a>
						</nav>
						<div className="flex flex-col gap-2 pt-4 border-t border-[var(--border)]">
							<Button
								// variant="outline"
								className="w-full border-[hsl(var(--primary))] text-[hsl(var(--primary))]"
								onClick={() => setMobileMenuOpen(false)}
							>
								Log in
							</Button>
							<Button
								className="w-full bg-[hsl(var(--primary))] text-white"
								onClick={() => setMobileMenuOpen(false)}
							>
								Sign up
							</Button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
