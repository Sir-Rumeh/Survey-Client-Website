import React from "react";
import { DownloadCloud, UserPlus, Rocket } from "lucide-react";

const ProcessSection = () => {
	const steps = [
		{
			title: "Download",
			description: "Available on:",
			icon: <DownloadCloud className="w-16 h-16 text-white" />,
			hasStores: true,
		},
		{
			title: "Sign Up or Sign In",
			description:
				"Go ahead and click Create a new account to Register, verify your email address and you can now fully access the App onboarding.",
			icon: <UserPlus className="w-16 h-16 text-[#32A800]" />,
			hasStores: false,
		},
		{
			title: "Start",
			description:
				"Click on the Get Started Button and pick Take Survey if you want to access the App as a participant or Conduct Survey to access the App as a Sponsor.",
			icon: <Rocket className="w-16 h-16 text-[#32A800]" />,
			hasStores: false,
		},
	];

	return (
		<section className="bg-white py-24 px-6">
			<div className="max-w-7xl mx-auto">
				{/* Section Heading */}
				<h2 className="text-5xl md:text-6xl font-extrabold text-[#32A800] text-center mb-20">Process</h2>

				{/* Steps Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<div
							key={index}
							className="border-2 border-[#32A800]/30 rounded-[2.5rem] p-10 flex flex-col items-center text-center hover:border-[#32A800] transition-colors duration-300 min-h-[450px]"
						>
							{/* Icon Container */}
							<div
								className={`mb-10 ${
									index === 0 ? "bg-[#32A800] p-4 rounded-2xl shadow-lg" : ""
								}`}
							>
								{step.icon}
							</div>

							{/* Title */}
							<h3 className="text-3xl font-extrabold text-[#32A800] mb-6">{step.title}</h3>

							{/* Description */}
							<p className="text-gray-800 text-lg font-medium leading-relaxed">
								{step.description}
							</p>

							{/* Conditional Store Buttons for Step 1 */}
							{step.hasStores && (
								<div className="mt-8 flex flex-col gap-3 w-full">
									<div className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition mx-auto w-48">
										<div className="w-5 h-5 bg-white rounded-full"></div>
										<div className="text-left leading-tight">
											<span className="text-[8px] uppercase block">Get it on</span>
											<span className="text-sm font-bold">Google Play</span>
										</div>
									</div>
									<div className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition mx-auto w-48">
										<div className="w-5 h-5 bg-white rounded-full"></div>
										<div className="text-left leading-tight">
											<span className="text-[8px] uppercase block">
												Download on the
											</span>
											<span className="text-sm font-bold">App Store</span>
										</div>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;
