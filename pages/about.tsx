import AboutUsContent from "@/components/sections/AboutUsContent";
import ProcessSection from "@/components/sections/ProcessSection";
import Head from "next/head";

export default function About() {
	return (
		<>
			<main className="min-h-screen bg-[#D0E7CC] overflow-x-hidden">
				<AboutUsContent />
				<ProcessSection />
			</main>
		</>
	);
}
