import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "./Footer";

type WebsiteLayoutProps = {
	children?: React.ReactNode;
};

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
	return (
		<div className="min-h-screen relative">
			<div className="absolute mx-auto w-full">
				<Navbar />
			</div>
			<main className="mx-auto">{children}</main>
			<Footer />
		</div>
	);
}
