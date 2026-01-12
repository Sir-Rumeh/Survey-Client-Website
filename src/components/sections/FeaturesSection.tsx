import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import FeaturesPhones from "@/assets/images/FeaturesPhones.png";

const FeaturesSection = () => {
	const sponsorsAppUrl = process.env.NEXT_PUBLIC_APP_SPONSORS_BASE_URL || "";
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
							<div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 shadow-lg cursor-pointer hover:scale-105 transition-transform">
								<div className="w-6 h-6 bg-white rounded-full"></div>
								<div className="text-left leading-tight">
									<span className="text-[8px] uppercase block opacity-70">Get it on</span>
									<span className="text-md font-bold">Google Play</span>
								</div>
							</div>
							<div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 shadow-lg cursor-pointer hover:scale-105 transition-transform">
								<div className="w-6 h-6 bg-white rounded-full"></div>
								<div className="text-left leading-tight">
									<span className="text-[8px] uppercase block opacity-70">
										Download on the
									</span>
									<span className="text-md font-bold">App Store</span>
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
					{/* Left Side: Image */}
					<Image src={FeaturesPhones} alt="FeaturesPhones" width={600} height={800} />

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

						<button
							onClick={() => window.open(sponsorsAppUrl, "_blank")}
							className="bg-[#94004F] text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-[#7a0041] active:scale-95 transition-all shadow-lg"
						>
							Conduct Survey
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
