import React from "react";

const Navbar = () => {
	return (
		<nav className="max-w-7xl mx-auto mt-6 px-4">
			<div className="bg-white/80 backdrop-blur-md rounded-xl py-3 px-6 flex items-center justify-between shadow-sm border border-white">
				<div className="flex items-center gap-2">
					{/* Replace with actual SVG logo */}
					<div className="bg-green-600 p-1 rounded">
						<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center font-bold text-green-600 text-xs">
							+
						</div>
					</div>
					<span className="text-2xl font-bold text-green-700 tracking-tight">SurveyPlus</span>
				</div>

				<div className="hidden md:flex items-center gap-8 text-green-800 font-medium">
					<a href="#" className="text-green-600 border-b-2 border-green-600">
						Home
					</a>
					<a href="#" className="hover:text-green-600 transition">
						About us
					</a>
					<a href="#" className="hover:text-green-600 transition">
						Overview
					</a>
					<a href="#" className="hover:text-green-600 transition">
						Blog
					</a>
					<a href="#" className="hover:text-green-600 transition">
						Contact
					</a>
				</div>

				<div className="flex items-center gap-3">
					<button className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition">
						Log In
					</button>
					<button className="border border-green-600 text-green-700 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
