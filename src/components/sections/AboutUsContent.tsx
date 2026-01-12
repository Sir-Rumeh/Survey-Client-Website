import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const AboutUsContent = () => {
	return (
		<div className="bg-white min-h-screen">
			{/* --- Hero / Header Section --- */}
			<div className="relative h-[300px] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 opacity-40">
					<Image src="/about-hero-bg.jpg" alt="Hero Background" fill className="object-cover" />
				</div>
				<h1 className="relative z-10 text-white text-5xl md:text-7xl font-extrabold tracking-tight">
					About Us
				</h1>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
				{/* --- Easy Access Section --- */}
				<div className="flex flex-col lg:flex-row items-center gap-16">
					<div className="lg:w-1/2 flex justify-center">
						{/* Laptop Mockup */}
						<div className="relative w-full max-w-md aspect-[4/3] drop-shadow-2xl">
							<div className="bg-slate-800 rounded-xl p-2 border-4 border-slate-700">
								<div className="bg-white rounded-lg h-64 overflow-hidden">
									<div className="bg-[#32A800] h-4 w-full" />
									<div className="p-4 space-y-2">
										<div className="h-4 w-1/2 bg-gray-100 rounded" />
										<div className="grid grid-cols-2 gap-2">
											<div className="h-20 bg-gray-50 rounded border border-gray-100" />
											<div className="h-20 bg-gray-50 rounded border border-gray-100" />
										</div>
									</div>
								</div>
							</div>
							<div className="h-4 w-full bg-slate-700 mt-1 rounded-b-xl shadow-lg" />
						</div>
					</div>

					<div className="lg:w-1/2 space-y-6">
						<h2 className="text-4xl md:text-5xl font-extrabold text-[#32A800] leading-tight">
							Easy Access to <br /> Respondents Suitable for Surveys
						</h2>
						<p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
							The SurveyPlus Application allows participants to register and answer pre-screening
							questions which comes with monetary reward compensations. The Reward is saved on the
							App Wallet and can be withdrawn to any personal account Nationwide.
						</p>
					</div>
				</div>

				{/* --- Vision & Mission Cards --- */}
				<div className="grid md:grid-cols-2 gap-8">
					{/* Vision */}
					<div className="bg-gray-50 rounded-[2.5rem] p-10 md:p-14 border border-gray-100 text-center flex flex-col items-center">
						<CheckCircle2 className="w-16 h-16 text-[#32A800] mb-6" strokeWidth={2.5} />
						<h3 className="text-4xl font-extrabold text-[#32A800] mb-6">Vision</h3>
						<p className="text-gray-700 text-lg font-medium leading-relaxed">
							To create the best survey and data analysis tool that meet the needs of organizations
							and individual researchers in a cost-effective and timely manner.
						</p>
					</div>

					{/* Mission */}
					<div className="bg-gray-50 rounded-[2.5rem] p-10 md:p-14 border border-gray-100 text-center flex flex-col items-center">
						<CheckCircle2 className="w-16 h-16 text-[#32A800] mb-6" strokeWidth={2.5} />
						<h3 className="text-4xl font-extrabold text-[#32A800] mb-6">Mission</h3>
						<p className="text-gray-700 text-lg font-medium leading-relaxed">
							To deliver data and actionable insights to organizations and researchers by providing
							these institutions and individuals with timely and cost-effective access to desired
							respondents' data while providing rewards for respondents in the process.
						</p>
					</div>
				</div>

				{/* --- Download App Today CTA --- */}
				<div className="bg-[#32A800] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
					<h3 className="text-3xl md:text-4xl font-extrabold text-white text-center md:text-left">
						Download Mobile App Today
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						<div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 shadow-lg cursor-pointer hover:scale-105 transition-transform">
							<div className="w-6 h-6 bg-white rounded-full"></div>
							<div className="text-left leading-tight">
								<span className="text-[10px] uppercase block opacity-70">Get it on</span>
								<span className="text-lg font-bold">Google Play</span>
							</div>
						</div>
						<div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 shadow-lg cursor-pointer hover:scale-105 transition-transform">
							<div className="w-6 h-6 bg-white rounded-full"></div>
							<div className="text-left leading-tight">
								<span className="text-[10px] uppercase block opacity-70">Download on the</span>
								<span className="text-lg font-bold">App Store</span>
							</div>
						</div>
					</div>
				</div>

				{/* --- Target Audience Section --- */}
				<div className="flex flex-col lg:flex-row items-center gap-16 pb-20">
					<div className="lg:w-1/2 order-2 lg:order-1">
						<div className="bg-gray-50 rounded-[2.5rem] p-10 md:p-14 border border-gray-100">
							<p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
								We currently have a nationally representative sample of adult Nigerians as
								"target audience" on our platform. This sample is balanced across the states in
								Nigeria, gender, age group, urban-rural location, income level among others. We
								are enrolling more adult Nigerians into our balanced sample to provide a larger
								target audience base for our customers.
							</p>
						</div>
					</div>

					<div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
						{/* Phone Mockups */}
						<div className="relative w-full max-w-sm h-[400px] flex items-center justify-center">
							<div className="absolute left-0 w-48 h-80 bg-slate-900 rounded-[2rem] border-4 border-slate-900 rotate-[-15deg] shadow-xl overflow-hidden z-0 translate-y-4">
								<div className="bg-white h-full w-full p-2">
									<div className="h-4 w-20 bg-gray-100 rounded mb-4" />
									<div className="h-40 bg-[#94004F]/10 rounded-lg" />
								</div>
							</div>
							<div className="relative w-48 h-80 bg-slate-900 rounded-[2rem] border-4 border-slate-900 shadow-2xl overflow-hidden z-10 translate-x-8">
								<div className="bg-white h-full w-full p-2">
									<div className="h-6 w-full bg-[#32A800] rounded mb-4" />
									<div className="h-32 bg-gray-50 rounded-lg" />
									<div className="mt-4 h-10 w-full bg-gray-100 rounded" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsContent;
