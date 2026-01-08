import React from "react";
import Image from "next/image";

const EarningsAndVideo = () => {
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
							<button className="bg-[#32A800] text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-green-700 transition shadow-lg active:scale-95">
								Take Survey
							</button>
						</div>
					</div>

					<div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
						{/* Phone Mockup Showing Survey UI */}
						<div className="relative w-64 md:w-80 h-[500px] md:h-[650px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-900 shadow-2xl rotate-[5deg] overflow-hidden">
							<div className="w-full h-full bg-white flex flex-col">
								<div className="bg-[#32A800] p-4 text-white text-xs font-bold pt-8">
									Creativity feedback survey
								</div>
								<div className="p-4 space-y-6">
									<div className="space-y-2">
										<div className="text-[10px] font-bold text-gray-400">
											1 of 5 Questions
										</div>
										<div className="h-4 w-full bg-gray-100 rounded"></div>
										{[1, 2, 3, 4].map((i) => (
											<div key={i} className="flex items-center gap-2">
												<div className="w-3 h-3 rounded-full border border-gray-300"></div>
												<div className="h-2 w-24 bg-gray-50 rounded"></div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* --- Learn More on YouTube Section --- */}
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-10">
					<div className="lg:w-1/2 w-full">
						{/* Video Thumbnail Placeholder */}
						<div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer">
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
							<Image
								src="/youtube-placeholder.jpg" // Replace with real thumbnail
								alt="YouTube Tutorial"
								layout="fill"
								objectFit="cover"
								className="brightness-75 group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 flex items-center justify-center z-20">
								<div className="w-20 h-20 md:w-28 md:h-28 bg-[#FF0000] rounded-[2rem] flex items-center justify-center shadow-xl">
									<div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
								</div>
							</div>
						</div>
					</div>

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
