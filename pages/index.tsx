import Navbar from "@/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DemographicSection from "@/components/sections/DemographicSection";
import CostSchedule from "@/components/sections/CostSchedule";
import EarningsAndVideo from "@/components/sections/EarningsAndVideo";

export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-[#D0E7CC] overflow-x-hidden">
				<Hero />
				<FeaturesSection />
				<DemographicSection />
				<CostSchedule />
				<EarningsAndVideo />
			</main>
		</>
	);
}
