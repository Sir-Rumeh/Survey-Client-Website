import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-[#D0E7CC] overflow-x-hidden">
				<Navbar />
				<Hero />
			</main>
		</>
	);
}
