import Head from "next/head";
import Layout from "../src/components/Layout";

import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import Stats from "../src/components/Stats";
import Pricing from "../src/components/Pricing";

export default function Home() {
	return (
		<>
			<Head>
				<title>SurveyPlus — Data and Insights Delivered</title>
				<meta name="description" content="SurveyPlus — data collection and respondents for your surveys." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<Hero />
				<Stats />
				<Features />
				<Pricing />
			</Layout>
		</>
	);
}
