import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Music } from "lucide-react";
import ContactUs from "@/assets/images/ContactUs.png";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { emConfig } from "@/lib/utils";

const ContactUsContent = () => {
	const socialLinks = [
		{ Icon: Facebook, href: "#" },
		{ Icon: Instagram, href: "https://www.instagram.com/surveyplus.ng?igsh=Mml3bG1vaXc1bWlk" },
		{ Icon: Linkedin, href: "https://www.linkedin.com/company/getsurveyplus/" },
		{ Icon: Music, href: "https://www.tiktok.com/@surveyplus_official?_r=1&_t=ZS-92wuq2Rbz7c" },
	];

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = (formData.get("name") as string) || "";
		const email = (formData.get("email") as string) || "";
		const message = (formData.get("message") as string) || "";

		if (!name.trim() || !email.trim() || !message.trim()) {
			toast.error("Please fill in all fields");
			return;
		}

		const emailRegex = /^\S+@\S+\.\S+$/;
		if (!emailRegex.test(email)) {
			toast.error("Please enter a valid email address");
			return;
		}

		emailjs.sendForm(emConfig.serviceID, emConfig.templateID, form, emConfig.publicID).then(
			(result) => {
				console.log(result.text);
				toast.success("Message sent successfully!");
				form.reset();
			},
			(error) => {
				console.log(error.text);
				toast.error("Failed to send message.");
			}
		);
	};

	return (
		<div className="bg-white min-h-screen">
			{/* --- Contact Us Hero Header --- */}
			<div className="relative h-[250px] md:h-[300px] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
				<div className="absolute inset-0 opacity-40">
					<Image
						src="/contact-hero-bg.jpg" // Replace with actual background image
						alt="Contact Background"
						fill
						className="object-cover"
					/>
				</div>
				<h1 className="relative z-10 text-white text-5xl md:text-7xl font-extrabold tracking-tight">
					Contact us
				</h1>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
					{/* --- Left Column: Illustration (3 Columns) --- */}
					<div className="lg:col-span-3 flex justify-center lg:justify-start">
						<Image src={ContactUs} alt="ContactUs" className="" />
					</div>

					{/* --- Middle Column: Contact Form (5 Columns) --- */}
					<div className="lg:col-span-5 bg-white border-2 border-[#32A800]/20 rounded-[2rem] p-8 md:p-10 shadow-sm">
						<form noValidate onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-2">
								<label htmlFor="name" className="text-xl font-extrabold text-gray-900">
									Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									placeholder="Enter your name"
									className="w-full bg-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-[#32A800] outline-none border-none transition-all placeholder:text-gray-400"
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="email" className="text-xl font-extrabold text-gray-900">
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									placeholder="Enter your email"
									className="w-full bg-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-[#32A800] outline-none border-none transition-all placeholder:text-gray-400"
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="message" className="text-xl font-extrabold text-gray-900">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="Message here"
									className="w-full bg-gray-100 p-4 rounded-xl h-48 focus:ring-2 focus:ring-[#32A800] outline-none border-none transition-all placeholder:text-gray-400 resize-none"
								/>
							</div>
							<button className="w-full bg-[#32A800] text-white py-4 rounded-xl text-xl font-bold hover:bg-green-700 transition shadow-lg active:scale-95">
								Send
							</button>
						</form>
					</div>

					{/* --- Right Column: Info & Socials (4 Columns) --- */}
					<div className="lg:col-span-4 space-y-12 lg:pl-8">
						{/* Contact Details */}
						<div className="space-y-8">
							<div className="flex gap-4">
								<div className="bg-[#32A800]/10 p-3 rounded-xl h-fit">
									<MapPin className="text-[#32A800]" size={24} />
								</div>
								<p className="text-gray-700 font-medium leading-relaxed">
									SurveyPlus LTD, 5th Floor, SpacePad Building, Km 18 Lekki-Epe Expressway,
									By Agungi Bus Stop, Lagos, Nigeria
								</p>
							</div>

							<div className="flex gap-4 items-center">
								<div className="bg-[#32A800]/10 p-3 rounded-xl">
									<Phone className="text-[#32A800]" size={24} />
								</div>
								<p className="text-gray-700 font-bold text-lg">+234 812 032 2861</p>
							</div>

							<div className="flex gap-4 items-center">
								<div className="bg-[#32A800]/10 p-3 rounded-xl">
									<Mail className="text-[#32A800]" size={24} />
								</div>
								<p className="text-gray-700 font-bold text-lg">info@getsurveyplus.com</p>
							</div>
						</div>

						{/* Social Follow */}
						<div className="space-y-6">
							<h4 className="text-3xl font-extrabold text-[#32A800] text-center lg:text-left">
								Follow Us
							</h4>
							<div className="flex justify-center lg:justify-start gap-4">
								{socialLinks.map(({ Icon, href }, idx) => (
									<a
										key={idx}
										href={href}
										target={href !== "#" ? "_blank" : undefined}
										rel={href !== "#" ? "noopener noreferrer" : undefined}
										className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-[#32A800] hover:bg-[#32A800] hover:text-white transition-all"
									>
										<Icon size={24} />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsContent;
