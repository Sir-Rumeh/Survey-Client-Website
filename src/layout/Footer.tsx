import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#94004F] text-white pt-16 pb-8 px-6 md:px-12">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					{/* Brand Column */}
					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<div className="bg-[#32A800] p-1.5 rounded-lg">
								<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center font-bold text-[#32A800] text-xs">
									+
								</div>
							</div>
							<span className="text-3xl font-bold tracking-tight text-[#32A800]">SurveyPlus</span>
						</div>
						<p className="text-lg opacity-90 leading-relaxed max-w-xs">
							SurveyPlus is a leading online platform providing superior survey and data analysis
							services.
						</p>
					</div>

					{/* Quick Links Column */}
					<div>
						<h4 className="text-xl font-bold mb-6">Quick Links</h4>
						<ul className="space-y-4 text-lg opacity-80">
							<li>
								<a href="#" className="hover:opacity-100 transition">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="hover:opacity-100 transition">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:opacity-100 transition">
									Overview
								</a>
							</li>
							<li>
								<a href="#" className="hover:opacity-100 transition">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="hover:opacity-100 transition">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Column */}
					<div>
						<h4 className="text-xl font-bold mb-6">Contact</h4>
						<ul className="space-y-4 text-lg opacity-80">
							<li className="leading-snug">
								SurveyPlus LTD, 5th Floor, SpacePad Building, Km 18 Lekki-Epe Expressway, By
								Agungi Bus Stop, Lagos, Nigeria
							</li>
							<li>+234 812 032 2861</li>
							<li>info@getsurveyplus.com</li>
						</ul>
					</div>

					{/* Available On Column */}
					<div>
						<h4 className="text-xl font-bold mb-6">Available on:</h4>
						<div className="flex flex-col gap-4">
							{/* Using stylized buttons to mimic store links */}
							<div className="bg-black border border-gray-700 rounded-xl px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition w-fit">
								<div className="w-6 h-6 bg-white rounded-full"></div>
								<div className="text-[10px] leading-tight uppercase font-medium">
									Get it on <br />
									<span className="text-base font-bold normal-case">Google Play</span>
								</div>
							</div>
							<div className="bg-black border border-gray-700 rounded-xl px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition w-fit">
								<div className="w-6 h-6 bg-white rounded-full"></div>
								<div className="text-[10px] leading-tight uppercase font-medium">
									Download on the <br />
									<span className="text-base font-bold normal-case">App Store</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
					{/* Social Icons */}
					<div className="flex items-center gap-4">
						{[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
							<a
								key={idx}
								href="#"
								className="w-10 h-10 rounded-lg border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#94004F] transition-all"
							>
								<Icon size={20} />
							</a>
						))}
					</div>

					{/* Copyright */}
					<p className="text-sm opacity-70 text-center md:text-right">
						© {currentYear} SurveyPlus by Deefrent Media. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
