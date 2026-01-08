import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="pt-28 pb-0 px-4 flex flex-col items-center text-center">
			<h1 className="text-5xl md:text-7xl font-extrabold text-green-700 leading-tight">
				Data and Insights <br /> Delivered.
			</h1>

			<p className="mt-6 max-w-2xl text-green-900/80 leading-relaxed font-medium">
				At SurveyPlus, we provide superior survey and data analysis services to Businesses, Researchers, and
				Governmental & Non-governmental organisations. Our passion is simplifying access to survey
				respondents, data collection and data analysis for actionable insights.
			</p>

			<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
				<button className="bg-[#94004F] text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:brightness-110 transition">
					Conduct Survey
				</button>
				<button className="bg-[#32A800] text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:brightness-110 transition">
					Take Survey
				</button>
			</div>

			{/* Visual Mockups Section */}
			<div className="mt-16 relative w-full max-w-5xl flex justify-center items-end">
				{/* Decorative Badge Left */}
				<div className="hidden lg:block absolute left-0 bottom-32 bg-green-50 border-2 border-green-600 p-4 rounded-2xl w-48 text-left">
					<div className="text-green-600 mb-2">💵</div>
					<p className="text-green-800 font-bold text-sm">Take surveys and get paid</p>
				</div>

				{/* Center Phones - Visualized with placeholder colors for layout */}
				<div className="flex items-end gap-[-20px] md:gap-4 relative z-10">
					<div className="w-48 h-96 bg-gray-200 rounded-[2rem] border-[6px] border-slate-800 shadow-2xl transform translate-y-12"></div>
					<div className="w-56 h-[450px] bg-white rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl z-20 overflow-hidden">
						{/* App Mockup Content goes here */}
						<div className="p-4 bg-green-50 h-full">
							<div className="h-4 w-20 bg-green-200 rounded mb-4"></div>
							<div className="h-32 w-full bg-green-500 rounded-xl mb-4"></div>
						</div>
					</div>
					<div className="w-48 h-96 bg-gray-200 rounded-[2rem] border-[6px] border-slate-800 shadow-2xl transform translate-y-12"></div>
				</div>

				{/* Decorative Badge Right */}
				<div className="hidden lg:block absolute right-0 bottom-32 bg-green-50 border-2 border-green-600 p-4 rounded-2xl w-48 text-center">
					<div className="flex justify-center -space-x-2 mb-2">
						<div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
						<div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white"></div>
						<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
					</div>
					<p className="text-green-800 font-bold text-sm">
						10K+ <br /> Completed Surveys
					</p>
				</div>

				{/* Connecting Dotted Line */}
				<div className="hidden lg:block absolute bottom-44 left-0 right-0 h-[2px] border-t-2 border-dashed border-green-400 -z-0"></div>
			</div>
		</section>
	);
};

export default Hero;
