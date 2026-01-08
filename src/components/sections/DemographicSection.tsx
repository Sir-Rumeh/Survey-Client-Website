import React from "react";
import Image from "next/image";

const demographicFields = [
	"Adult Population Weight",
	"State",
	"Relation With Household head",
	"Education",
	"Longitude",
	"Lactitude",
	"Local Governement Area",
	"Geo-Polictical Zone",
];

const DemographicSection = () => {
	return (
		<section className="bg-white py-20 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Heading Section */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-6xl font-extrabold text-[#94004F] mb-6">Demograpgic Data</h2>
					<p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
						In addition to responses to Sponsors' questions, completed survey responses come with the
						following demographic data of Respondents:
					</p>
				</div>

				{/* Data Points Card */}
				<div className="bg-[#94004F] rounded-[2.5rem] p-8 md:p-16 shadow-xl border-[6px] border-[#3B82F6]/20">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
						{/* Left Column */}
						<div className="space-y-0">
							{demographicFields.map((field, index) => (
								<div
									key={`left-${index}`}
									className="border-b border-white/30 py-4 last:border-0 md:last:border-b"
								>
									<span className="text-white text-xl md:text-2xl font-semibold tracking-wide">
										{field}
									</span>
								</div>
							))}
						</div>

						{/* Right Column (Duplicate fields as per the reference image) */}
						<div className="hidden md:block space-y-0">
							{demographicFields.slice(0, 7).map((field, index) => (
								<div key={`right-${index}`} className="border-b border-white/30 py-4">
									<span className="text-white text-xl md:text-2xl font-semibold tracking-wide">
										{field}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Trusted By Section */}
				<div className="mt-24 text-center">
					<h4 className="text-2xl font-bold text-gray-900 mb-12">Trusted by:</h4>
					<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-80 hover:grayscale-0 transition-all">
						{/* Replace with your actual logo images */}
						<div className="h-12 w-40 relative">
							<div className="font-black text-gray-400 text-xl italic">GONGONI COMPANY LTD.</div>
						</div>
						<div className="h-12 w-12 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
							GB
						</div>
						<div className="h-12 w-32 relative">
							<div className="font-bold text-gray-800 text-lg">GetBundi</div>
						</div>
						<div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-700">
							<span className="text-[10px] text-green-800 font-bold">LOGO</span>
						</div>
						<div className="h-12 w-12 bg-yellow-400 flex items-center justify-center">
							<span className="text-[10px] text-black font-black">bop inc</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DemographicSection;
