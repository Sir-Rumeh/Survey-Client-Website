import React, { useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import StoreButtons from "../shared/StoreButtons";
import { getRecentBlogPosts } from "@/config/blog-actions";
import BlogImg from "@/assets/images/BlogImg.png";

const BlogContent = () => {
	const router = useRouter();

	useEffect(() => {
		(async () => {
			try {
				const blogFormData = new FormData();
				blogFormData.append("numOfBlogs", "4");
				const data = {
					numOfBlogs: 4,
				};
				const res = await getRecentBlogPosts(data);
				console.log("getRecentBlogPosts result:", res);
			} catch (err) {
				console.error("Error fetching blog posts:", err);
			}
		})();
	}, []);
	const otherPosts = [1, 2, 3, 4];
	const popularPosts = [1, 2, 3];

	return (
		<div className="bg-white min-h-screen">
			{/* --- Blog Hero Header --- */}
			<div className="relative h-[400px] w-full bg-slate-900 overflow-hidden flex items-center justify-center rounded-br-3xl rounded-bl-3xl">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 opacity-40">
					<Image src={BlogImg} alt="Blog Background" fill className="object-cover" />
				</div>
				<h1 className="relative z-10 text-white text-5xl md:text-7xl font-extrabold tracking-tight">
					Blog
				</h1>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* --- Main Content Area (8 Columns) --- */}
					<div className="lg:col-span-8 space-y-16">
						{/* Latest Post */}
						<section>
							<h2 className="text-3xl font-bold text-[#94004F] mb-8">Latest Post</h2>
							<div className="space-y-6">
								<div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg">
									<Image
										src="/post-image.jpg" // Replace with post thumbnail
										alt="Latest Post"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-[#94004F]">
									6 Best Ways To Increase Your Survey Response Rates
								</h3>
								<p className="text-gray-700 leading-relaxed text-lg">
									Imagine sending someone a message and only receiving a "seen at"
									notification with no reply. We've all been there, and it's somewhat
									frustrating. The same can happen with your surveys if not properly
									planned...{" "}
									<button
										onClick={() => router.push("/blog-details")}
										className="text-[#94004F] font-bold cursor-pointer"
									>
										Read more
									</button>
								</p>
							</div>
						</section>

						{/* Popular Posts */}
						<section>
							<h2 className="text-3xl font-bold text-[#94004F] mb-8">Popular Posts</h2>
							<div className="space-y-8">
								{popularPosts.map((_, i) => (
									<div
										key={i}
										className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-6 rounded-[2rem]"
									>
										<div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden">
											<Image
												src="/post-thumb.jpg"
												alt="Thumb"
												fill
												className="object-cover"
											/>
										</div>
										<div className="space-y-3">
											<h4 className="text-xl font-bold text-[#94004F]">
												6 Best Ways To Increase Your Survey Response Rates
											</h4>
											<p className="text-sm text-gray-600 line-clamp-2">
												Imagine sending someone a message and only receiving a "seen
												at" notification...
											</p>
											<button
												onClick={() => router.push("/blog-details")}
												className="text-[#94004F] text-xs font-bold cursor-pointer"
											>
												Read more
											</button>
										</div>
									</div>
								))}
							</div>
						</section>
					</div>

					{/* --- Sidebar Area (4 Columns) --- */}
					<aside className="lg:col-span-4 space-y-12">
						{/* Search Bar */}
						<div className="relative flex items-center">
							<input
								type="text"
								placeholder="Search"
								className="w-full bg-gray-100 rounded-lg py-3 px-4 focus:outline-none border border-gray-200"
							/>
							<button className="absolute right-0 bg-[#94004F] p-3 rounded-r-lg text-white">
								<Search size={20} />
							</button>
						</div>

						{/* Other Posts */}
						<div>
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Other Posts</h2>
							<div className="space-y-4">
								{otherPosts.map((_, i) => (
									<div key={i} className="flex gap-4 items-center bg-gray-50 p-3 rounded-xl">
										<div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
											<Image
												src="/post-thumb.jpg"
												alt="Thumb"
												fill
												className="object-cover"
											/>
										</div>
										<p className="text-sm font-bold text-[#94004F] leading-snug">
											6 Best Ways To Increase Your Survey...
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Comments Section */}
						<div>
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Comments</h2>
							<div className="bg-gray-50 p-6 rounded-xl space-y-4">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-orange-200" />
									<div>
										<p className="font-bold text-sm">Sarah Jakes</p>
										<p className="text-[10px] text-gray-400">May 25th, 2025</p>
									</div>
								</div>
								<p className="text-xs text-gray-600 leading-relaxed">
									Survey plus is changing the game in data collection industry and I can't
									wait to see what they bring on in the next 5 years.
								</p>
							</div>
						</div>

						{/* Leave a Comment Form */}
						<div className="border border-[#94004F]/30 p-8 rounded-[2rem]">
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Leave a comment</h2>
							<form className="space-y-4">
								<div>
									<label className="text-xs font-bold mb-1 block">Name</label>
									<input type="text" className="w-full bg-gray-100 p-3 rounded-lg text-sm" />
								</div>
								<div>
									<label className="text-xs font-bold mb-1 block">Email</label>
									<input
										type="email"
										className="w-full bg-gray-100 p-3 rounded-lg text-sm"
									/>
								</div>
								<div>
									<label className="text-xs font-bold mb-1 block">Comment</label>
									<textarea className="w-full bg-gray-100 p-3 rounded-lg text-sm h-32" />
								</div>
								<button className="bg-[#94004F] text-white w-full py-3 rounded-lg font-bold text-sm hover:brightness-110">
									Post Now
								</button>
							</form>
						</div>
					</aside>
				</div>

				{/* --- Full Width CTA --- */}
				<div className="mt-20 bg-[#94004F] rounded-[2rem] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
					<h3 className="text-2xl md:text-3xl font-extrabold text-white text-center md:text-left w-[70%]">
						Download Mobile App Today
					</h3>
					<div className="scale-50">
						<StoreButtons />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogContent;
