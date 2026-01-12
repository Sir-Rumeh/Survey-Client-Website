import React from "react";
import Image from "next/image";
import PaidIcon from "@/assets/svgs/PaidIconSVG";
import Iphone13Pro from "@/assets/images/Iphone13Pro.png";
import PersonOne from "@/assets/svgs/PersonOne";

const Hero = () => {
	const respondentsAppUrl = process.env.NEXT_PUBLIC_APP_RESPONDENTS_BASE_URL || "";
	const sponsorsAppUrl = process.env.NEXT_PUBLIC_APP_SPONSORS_BASE_URL || "";
	return (
		<section className="mt-6 pt-28 pb-0 px-4 flex flex-col items-center text-center min-h-screen">
			<h1 className="text-5xl md:text-7xl font-extrabold text-green-700 leading-tight">
				Data and Insights <br /> Delivered.
			</h1>

			<p className="mt-6 max-w-2xl text-green-900/80 leading-relaxed font-medium">
				At SurveyPlus, we provide superior survey and data analysis services to Businesses, Researchers, and
				Governmental & Non-governmental organisations. Our passion is simplifying access to survey
				respondents, data collection and data analysis for actionable insights.
			</p>

			<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
				<button
					onClick={() => window.open(sponsorsAppUrl, "_blank")}
					className="bg-[#94004F] text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:brightness-110 transition"
				>
					Conduct Survey
				</button>
				<button
					onClick={() => window.open(respondentsAppUrl, "_blank")}
					className="bg-[#32A800] text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:brightness-110 transition"
				>
					Take Survey
				</button>
			</div>

			{/* Visual Mockups Section */}
			<div className="mt-16 relative w-full max-w-5xl flex justify-center items-end">
				{/* Decorative Badge Left */}
				{/* <Image src={TakeSurveyGetPaidSVG} alt="Hero illustration" width={400} height={300} /> */}
				<div className="hidden lg:block absolute -left-20 bottom-32  border-2 border-green-600 p-4 rounded-2xl w-48 text-center rounded-tr-none">
					<div className="text-green-600 mb-2 flex justify-center">
						<PaidIcon />
					</div>
					<p className="text-green-700 font-bold text-sm">Take surveys and get paid</p>
				</div>

				{/* Center Phones - Visualized with placeholder colors for layout */}
				<div className="flex items-end gap-[-20px] md:gap-4 relative z-10">
					<Image src={Iphone13Pro} alt="iPhone 13 Pro Mockup" width={600} className="" />
				</div>

				{/* Decorative Badge Right */}
				<div className="hidden lg:block absolute -right-20 bottom-32  border-2 border-green-600 p-4 rounded-2xl rounded-tl-none w-48 text-center">
					<div className="flex justify-center -space-x-3 mb-2">
						<img
							src="https://api.dicebear.com/9.x/avataaars/svg"
							alt="avatar"
							className="w-12 h-12 rounded-full border-white bg-slate-50 p-1"
						/>{" "}
						<img
							src="https://api.dicebear.com/9.x/avataaars/svg"
							alt="avatar"
							className="w-14 h-14 -translate-y-2 rounded-full border-white bg-slate-50 p-1"
						/>{" "}
						<img
							src="https://api.dicebear.com/9.x/avataaars/svg"
							alt="avatar"
							className="w-12 h-12 rounded-full border-white bg-slate-50 p-1"
						/>{" "}
					</div>
					<p className="text-green-700 font-bold text-sm">
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
