import React from "react";
import Image from "next/image";
import { Search, Send } from "lucide-react";

const BlogDetailsContent = () => {
	const otherPosts = [1, 2, 3, 4];
	const comments = [
		{
			name: "Sarah Jakes",
			date: "May 25th, 2025",
			text: "Survey plus is changing the game in data collection industry and I can't wait to see what they bring on in the next 5 years.",
		},
		{
			name: "Sarah Jakes",
			date: "May 25th, 2025",
			text: "Survey plus is changing the game in data collection industry and I can't wait to see what they bring on in the next 5 years.",
		},
	];

	return (
		<div className="bg-white min-h-screen">
			{/* --- Article Hero --- */}
			<div className="relative h-[300px] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
				<div className="absolute inset-0 opacity-40">
					<Image
						src="/blog-detail-hero.jpg"
						alt="Feedback Survey Background"
						fill
						className="object-cover"
					/>
				</div>
				<div className="relative z-10 text-center px-4 max-w-4xl">
					<h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
						6 Best Ways To Increase Your Survey Response Rates
					</h1>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* --- Main Article Content (8 Columns) --- */}
					<article className="lg:col-span-8">
						<h2 className="text-3xl md:text-4xl font-bold text-[#94004F] mb-8">
							6 Best Ways To Increase Your Survey Response Rates
						</h2>

						<div className="space-y-6 text-gray-800 text-lg leading-relaxed font-medium">
							<p>
								Imagine sending someone a message and only receiving a "seen at" notification
								with no reply. We've all been there, and it's somewhat frustrating. The same can
								happen with your surveys if not properly planned.
							</p>
							<p>
								You've prepared your survey, and now it's time to send it. But how will you
								invite people to participate? Where should you post it to capture the most
								attention? The answers depend on your target audience, the insights you seek,
								and the decisions you need to make.
							</p>

							<h3 className="text-[#94004F] font-bold text-xl mt-10">
								Here are 6 proven ways you can increase your chances of getting responses to
								your surveys:
							</h3>

							<p>1. Keep your survey short(ish)</p>
							<p className="underline decoration-[#94004F] underline-offset-4">
								The shorter your survey, the higher the response rate!
							</p>

							{/* Data Visualization / Chart Section */}
							<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm my-10">
								<h4 className="text-center font-bold text-gray-900 mb-4">
									Abandonment Rate by # of Questions
								</h4>
								<div className="relative h-64 w-full">
									{/* Placeholder for the line chart image */}
									<Image
										src="/abandonment-chart.png"
										alt="Abandonment Rate Graph"
										fill
										className="object-contain"
									/>
								</div>
							</div>

							<p>
								Imagine sending someone a message and only receiving a "seen at" notification
								with no reply. We've all been there, and it's somewhat frustrating.
							</p>
						</div>

						{/* Leave a Comment Form */}
						<div className="mt-20 border border-[#94004F]/30 p-8 md:p-12 rounded-[2.5rem] bg-gray-50/50">
							<h2 className="text-2xl md:text-3xl font-bold text-[#94004F] mb-8">
								Leave a comment
							</h2>
							<form className="grid grid-cols-1 gap-6">
								<div className="space-y-2">
									<label className="text-sm font-bold text-gray-700">Name</label>
									<input
										type="text"
										placeholder="Enter your name"
										className="w-full bg-gray-100/80 p-4 rounded-xl focus:ring-2 focus:ring-[#94004F] outline-none border-none transition-all"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-sm font-bold text-gray-700">Email</label>
									<input
										type="email"
										placeholder="Enter your email"
										className="w-full bg-gray-100/80 p-4 rounded-xl focus:ring-2 focus:ring-[#94004F] outline-none border-none transition-all"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-sm font-bold text-gray-700">Comment</label>
									<textarea
										placeholder="Comment here"
										className="w-full bg-gray-100/80 p-4 rounded-xl h-40 focus:ring-2 focus:ring-[#94004F] outline-none border-none transition-all"
									/>
								</div>
								<button className="bg-[#94004F] text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all w-fit">
									Post Now <Send size={18} />
								</button>
							</form>
						</div>
					</article>

					{/* --- Sidebar Area (4 Columns) --- */}
					<aside className="lg:col-span-4 space-y-12">
						{/* Search */}
						<div className="relative">
							<input
								type="text"
								placeholder="Search"
								className="w-full bg-gray-100 rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#94004F] outline-none border-none"
							/>
							<button className="absolute right-0 top-0 bottom-0 bg-[#94004F] px-4 rounded-r-xl text-white">
								<Search size={20} />
							</button>
						</div>

						{/* Other Posts */}
						<div>
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Other Posts</h2>
							<div className="space-y-4">
								{otherPosts.map((_, i) => (
									<div
										key={i}
										className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl group cursor-pointer hover:bg-white hover:shadow-md transition-all"
									>
										<div className="relative w-24 h-20 flex-shrink-0 rounded-xl overflow-hidden">
											<Image
												src="/post-thumb.jpg"
												alt="Post"
												fill
												className="object-cover"
											/>
										</div>
										<p className="text-sm font-bold text-[#94004F] leading-snug group-hover:text-[#32A800]">
											6 Best Ways To Increase Your Survey...
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Comments List */}
						<div>
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Comment</h2>
							<div className="space-y-6">
								{comments.map((comment, i) => (
									<div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
										<div className="flex items-center gap-3 mb-3">
											<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
												SJ
											</div>
											<div>
												<p className="font-bold text-sm text-gray-900">
													{comment.name}
												</p>
												<p className="text-[10px] text-gray-400 font-bold uppercase">
													{comment.date}
												</p>
											</div>
										</div>
										<p className="text-xs text-gray-600 leading-relaxed font-medium">
											{comment.text}
										</p>
									</div>
								))}
							</div>
						</div>
					</aside>
				</div>

				{/* --- Global Download CTA --- */}
				<div className="mt-24 bg-[#94004F] rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
					<h3 className="text-3xl md:text-4xl font-extrabold text-white">Download Mobile App Today</h3>
					<div className="flex flex-wrap gap-4 justify-center">
						<div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 shadow-lg cursor-pointer hover:scale-105 transition-transform">
							<div className="w-6 h-6 bg-white rounded-full"></div>
							<div className="text-left leading-tight">
								<span className="text-[10px] uppercase block opacity-70">Get it on</span>
								<span className="text-lg font-bold">Google Play</span>
							</div>
						</div>
						<div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 shadow-lg cursor-pointer hover:scale-105 transition-transform">
							<div className="w-6 h-6 bg-white rounded-full"></div>
							<div className="text-left leading-tight">
								<span className="text-[10px] uppercase block opacity-70">Download on the</span>
								<span className="text-lg font-bold">App Store</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetailsContent;
