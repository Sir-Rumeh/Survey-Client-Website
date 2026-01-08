import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const FeaturesSection = () => {
	return (
		<section className="bg-white py-16 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				{/* --- Top Stats & App Links Row --- */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
					{/* Registered Users */}
					<div className="bg-[#32A800] rounded-3xl p-8 text-center text-white flex flex-col justify-center items-center">
						<h3 className="text-5xl font-extrabold mb-1">10k+</h3>
						<p className="text-lg font-medium opacity-90">Registered Users</p>
					</div>

					{/* Trust Badge */}
					<div className="bg-black rounded-3xl p-8 text-center text-white flex flex-col justify-center items-center relative overflow-hidden">
						{/* Subtle background graphic effect */}
						<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent"></div>
						<h3 className="text-2xl font-bold leading-tight relative z-10">
							Responses You <br /> Can Trust
						</h3>
					</div>

					{/* App Store Links */}
					<div className="bg-[#E2F9D0] rounded-3xl p-8 flex flex-col items-center justify-center gap-4">
						<span className="text-[#32A800] font-bold text-xl mb-1">Available on:</span>
						<div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
							{/* Using placeholder divs to mimic buttons - replace with <Image /> for real logos */}
							<div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition min-w-[140px]">
								<div className="w-5 h-5 bg-white rounded-full"></div>
								<div className="text-[10px] leading-tight text-left">
									GET IT ON <br />
									<span className="text-sm font-bold">Google Play</span>
								</div>
							</div>
							<div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition min-w-[140px]">
								<div className="w-5 h-5 bg-white rounded-full"></div>
								<div className="text-[10px] leading-tight text-left">
									Download on the <br />
									<span className="text-sm font-bold">App Store</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* --- Main Features Heading --- */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl font-extrabold text-[#94004F] mb-6 leading-[1.1]">
						Access Respondents Suitable for <br className="hidden lg:block" /> your Surveys on Our
						Platform
					</h2>
					<p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
						SurveyPlus presents opportunities for organisations and individuals to have fast and easy
						access to respondents suitable for their surveys anywhere.
					</p>
				</div>

				{/* --- Features Grid --- */}
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Side: Overlapping Mockups */}
					<div className="relative h-[450px] md:h-[600px] flex justify-center items-center">
						{/* Back Phone */}
						<div className="absolute left-4 md:left-10 top-0 w-56 md:w-72 h-[480px] md:h-[550px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-900 shadow-2xl rotate-[-12deg] z-0 overflow-hidden">
							<div className="w-full h-full bg-white p-4">
								<div className="h-4 w-24 bg-gray-100 rounded mb-6"></div>
								<div className="space-y-4">
									<div className="h-32 w-full bg-gray-50 rounded-xl border border-gray-100"></div>
									<div className="h-8 w-full bg-gray-50 rounded"></div>
									<div className="h-10 w-full bg-[#94004F]/10 rounded"></div>
								</div>
							</div>
						</div>

						{/* Front Phone */}
						<div className="absolute left-28 md:left-36 top-16 w-56 md:w-72 h-[480px] md:h-[550px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rotate-[6deg] z-10 overflow-hidden">
							<div className="w-full h-full bg-white p-4 flex flex-col">
								<div className="h-2 w-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
								<div className="h-6 w-3/4 bg-gray-100 rounded mb-4"></div>
								<div className="space-y-3">
									<div className="h-40 w-full bg-gray-50 rounded-xl border border-gray-100"></div>
									<div className="h-10 w-full bg-[#94004F] rounded-lg"></div>
								</div>
								<div className="mt-auto flex justify-between p-2 border-t border-gray-100">
									{[1, 2, 3].map((i) => (
										<div key={i} className="w-5 h-5 rounded-full bg-gray-100" />
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right Side: Info Card */}
					<div className="bg-gray-50 rounded-[3rem] p-8 md:p-14 border border-gray-100">
						<p className="text-xl md:text-2xl font-medium text-gray-800 mb-10 leading-snug">
							Use SurveyPlus free online survey Platform for your academic, market and policy
							research and other relevant text. We offer:
						</p>

						<ul className="space-y-8 mb-12">
							{[
								"Effortless data collection",
								"Optional rewards for respondents",
								"Collaborative workflow",
							].map((feature, idx) => (
								<li key={idx} className="flex items-center gap-5">
									<div className="flex-shrink-0 bg-[#94004F] rounded-full p-1 text-white shadow-md">
										<CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
									</div>
									<span className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
										{feature}
									</span>
								</li>
							))}
						</ul>

						<button className="bg-[#94004F] text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-[#7a0041] active:scale-95 transition-all shadow-lg">
							Conduct Survey
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
