import React from "react";
import Image from "next/image";
import Iphone17Pro from "@/assets/images/Iphone17Pro.png";
import Youtube from "@/assets/images/Youtube.png";

const EarningsAndVideo = () => {
	const respondentsAppUrl = process.env.NEXT_PUBLIC_APP_RESPONDENTS_BASE_URL || "";
	return (
		<section className="bg-white py-20 px-4 md:px-8 space-y-32">
			<div className="max-w-7xl mx-auto">
				{/* --- Earn with SurveyPlus Section --- */}
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
					<div className="lg:w-1/2 order-2 lg:order-1">
						<h2 className="text-5xl md:text-7xl font-extrabold text-[#32A800] leading-tight mb-8">
							Earn with <br /> SurveyPlus by <br /> taking surveys
						</h2>
						<div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
							<p className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed mb-10">
								Survey respondents receive and complete surveys almost immediately helping
								organisations and individuals to complete their data collection and analysis in
								a timely and cost-effective manner.
							</p>
							<button
								onClick={() => window.open(respondentsAppUrl, "_blank")}
								className="bg-[#32A800] text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-green-700 transition shadow-lg active:scale-95"
							>
								Take Survey
							</button>
						</div>
					</div>

					<div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
						<Image src={Iphone17Pro} alt="iPhone 17 Pro Mockup" className="" />
					</div>
				</div>

				{/* --- Learn More on YouTube Section --- */}
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-10">
					<a href="https://www.youtube.com" target="blank" className="lg:w-1/2 w-full">
						{/* Video Thumbnail Placeholder */}
						<Image src={Youtube} alt="Youtube" className="" />
					</a>

					<div className="lg:w-1/2">
						<h2 className="text-5xl md:text-7xl font-extrabold text-[#32A800] leading-tight mb-8">
							Learn More on <br /> YouTube
						</h2>
						<p className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
							Either to Conduct a survey or take survey, we have created step by step process on
							each task for you to have a seamless usage of our platform.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EarningsAndVideo;
