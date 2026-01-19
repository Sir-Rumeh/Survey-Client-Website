import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import StoreButtons from "../shared/StoreButtons";
import MacBookAir from "@/assets/images/MacBookAir.png";
import Iphone15Pro from "@/assets/images/IPhone15Pro.png";
import AboutUsImg from "@/assets/images/AboutUsImg.png";

const AboutUsContent = () => {
	return (
		<div className="bg-white min-h-screen">
			{/* --- Hero / Header Section --- */}
			<div className="relative h-[400px] w-full bg-slate-900 overflow-hidden flex items-center justify-center rounded-br-3xl rounded-bl-3xl">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 opacity-40">
					<Image src={AboutUsImg} alt="About Us Background" fill className="object-cover" />
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
						<Image src={MacBookAir} alt="MacBookAir" />
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
				<div className="relative bg-[#32A800] w-full rounded-[2rem] flex flex-col md:flex-row items-center md:justify-end shadow-xl gap-8 px-6 md:px-10">
					<h3 className="text-3xl md:text-4xl font-extrabold text-white text-center md:text-left w-[70%]">
						Download Mobile App Today
					</h3>
					<div className="scale-50">
						<StoreButtons />
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
						<Image src={Iphone15Pro} alt="Iphone15Pro" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsContent;
