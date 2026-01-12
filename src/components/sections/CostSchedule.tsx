import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CostScheduleImg from "@/assets/images/CostSchedule.png";
import Image from "next/image";

const pricingData = [
	{ range: "1 - 5 Questions", price: "N500 per respondent" },
	{ range: "5 - 10 Questions", price: "N750 per respondent" },
	{ range: "11 - 15 Questions", price: "N900 per respondent" },
	{ range: "16 - 20 Questions", price: "N1000 per respondent" },
	{ range: "21 - 30 Questions", price: "N1250 per respondent" },
	{ range: "31 - 40 Questions", price: "N1500 per respondent" },
	{ range: "41 - 50 Questions", price: "N2000 per respondent" },
];

const CostSchedule = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(4); // Defaulting 21-30 to open as per image

	return (
		<section className="bg-white py-20 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
					{/* Text Content */}
					<div className="lg:w-1/2">
						<h2 className="text-5xl md:text-6xl font-bold text-[#94004F] mb-6">Cost Schedule</h2>
						<p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
							We deliver data and actionable insight to organisations and researchers in a timely
							manner. Click on each tab to see the corresponding pricing.
						</p>
					</div>

					{/* Illustration Area */}
					<div className="lg:w-1/2 flex justify-center">
						<Image src={CostScheduleImg} alt="CostScheduleImg" />
					</div>
				</div>

				{/* Pricing Accordion Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
					{pricingData.map((item, index) => (
						<div key={index} className="flex flex-col">
							<button
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className={`flex items-center justify-between p-5 rounded-xl border-2 transition-all ${
									openIndex === index
										? "border-[#94004F] bg-white"
										: "border-gray-200 bg-gray-50 hover:bg-white"
								}`}
							>
								<div className="flex items-center gap-4">
									{openIndex === index ? (
										<ChevronUp className="text-[#94004F] w-6 h-6" />
									) : (
										<ChevronDown className="text-gray-500 w-6 h-6" />
									)}
									<span className="text-xl md:text-2xl font-bold text-gray-800">
										{item.range}
									</span>
								</div>
							</button>

							{/* Accordion Content */}
							{openIndex === index && (
								<div className="bg-gray-50 border-x-2 border-b-2 border-gray-100 p-6 rounded-b-xl -mt-2 text-center animate-in fade-in slide-in-from-top-1">
									<span className="text-slate-500 text-lg md:text-xl font-medium">
										{item.price}
									</span>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CostSchedule;
