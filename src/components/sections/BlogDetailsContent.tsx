import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Search, Send, Loader2 } from "lucide-react";
import { useRouter } from "next/router";
import StoreButtons from "../shared/StoreButtons";
import {
	getBlogById,
	fetchCommentsByBlog,
	postBlogComment,
	getOtherBlogs,
	searchBlogs,
	Blog,
	BlogComment,
} from "@/config/blog-actions";
import toast from "react-hot-toast";

// --- Skeleton Component ---
const BlogDetailsSkeleton = () => (
	<div className="animate-pulse bg-white min-h-screen">
		{/* Hero Skeleton */}
		<div className="h-[400px] w-full bg-gray-200 rounded-br-3xl rounded-bl-3xl" />

		<div className="max-w-7xl mx-auto px-6 py-16">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				{/* Main Content Skeleton */}
				<div className="lg:col-span-8 space-y-8">
					<div className="h-12 bg-gray-200 rounded-lg w-3/4 mb-4" />
					<div className="space-y-4">
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-5/6" />
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-4/5" />
					</div>
					<div className="h-[400px] bg-gray-50 rounded-[2.5rem] mt-20" />
				</div>

				{/* Sidebar Skeleton */}
				<div className="lg:col-span-4 space-y-12">
					<div className="h-14 bg-gray-100 rounded-xl w-full" />
					<div className="space-y-6">
						<div className="h-8 bg-gray-200 rounded w-1/2" />
						{[1, 2, 3, 4].map((i) => (
							<div key={i} className="flex gap-4 items-center">
								<div className="w-24 h-20 bg-gray-200 rounded-xl flex-shrink-0" />
								<div className="h-4 bg-gray-200 rounded w-full" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
);

const BlogDetailsContent = () => {
	const router = useRouter();
	const { id } = router.query;

	const [blog, setBlog] = useState<Blog | null>(null);
	const [otherPosts, setOtherPosts] = useState<Blog[]>([]);
	const [comments, setComments] = useState<BlogComment[]>([]);
	const [loading, setLoading] = useState(true);
	const [postingComment, setPostingComment] = useState(false);
	const [searching, setSearching] = useState(false);

	const getPostId = (p: Blog | any) => p?.blog_id ?? p?.id ?? p?.blogid ?? p?.blogId ?? p?._id ?? null;

	const blogImageBaseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? "";

	const blogImageUrl = blog?.blog_pic
		? blog.blog_pic.startsWith("http")
			? blog.blog_pic
			: `${blogImageBaseUrl}/images/blog/${blog.blog_pic}`
		: "/post-image.jpg";

	useEffect(() => {
		if (!id) return;

		const fetchBlogData = async () => {
			setLoading(true);
			try {
				const [blogData, commentsData, otherData] = await Promise.all([
					getBlogById(id as string),
					fetchCommentsByBlog(id as string),
					getOtherBlogs({ numOfBlogs: 4 }),
				]);

				setBlog(blogData);
				setComments(commentsData || []);
				setOtherPosts(Array.isArray(otherData) ? otherData : (otherData as any)?.data || []);
			} catch (error) {
				console.error("Error loading blog details:", error);
				toast.error("Failed to load blog post");
			} finally {
				setLoading(false);
			}
		};

		fetchBlogData();
	}, [id]);

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const keyword = formData.get("keyword")?.toString().trim() || "";

		if (!keyword) return;

		setSearching(true);
		try {
			await searchBlogs({ keyword });
			router.push({
				pathname: "/blog",
				query: { search: keyword },
			});
		} catch (error) {
			toast.error("Search failed. Please try again.");
		} finally {
			setSearching(false);
		}
	};

	const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!id) return;

		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = formData.get("name")?.toString().trim();
		const email = formData.get("email")?.toString().trim();
		const comment = formData.get("comment")?.toString().trim();

		if (!name || !email || !comment) {
			toast.error("Please fill in all fields");
			return;
		}

		setPostingComment(true);
		const loadingToast = toast.loading("Posting comment...");

		try {
			const success = await postBlogComment({
				name,
				email,
				comment,
				blogid: id as string,
				added_time: new Date().toISOString(),
			});

			if (success) {
				toast.success("Comment posted!", { id: loadingToast });
				form.reset();
				const updatedComments = await fetchCommentsByBlog(id as string);
				setComments(updatedComments);
			}
		} catch (error) {
			toast.error("Failed to post comment", { id: loadingToast });
		} finally {
			setPostingComment(false);
		}
	};

	// Use Skeleton while initial data is loading
	if (loading) {
		return <BlogDetailsSkeleton />;
	}

	if (!blog) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-gray-500 font-medium">Blog post not found.</p>
			</div>
		);
	}

	return (
		<div className="bg-white min-h-screen">
			{/* --- Article Hero --- */}
			<div className="relative h-[400px] w-full bg-slate-900 overflow-hidden flex items-center justify-center rounded-br-3xl rounded-bl-3xl">
				<div className="absolute inset-0 opacity-40">
					<Image src={blogImageUrl} alt={blog.blog_title} fill className="object-cover" />
				</div>
				<div className="relative z-10 text-center px-4 max-w-4xl">
					<h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
						{blog.blog_title}
					</h1>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* --- Main Article Content --- */}
					<article className="lg:col-span-8">
						<h2 className="text-3xl md:text-4xl font-bold text-[#94004F] mb-8">{blog.blog_title}</h2>

						<div
							className="space-y-6 text-gray-800 text-lg leading-relaxed font-medium blog-content-area"
							dangerouslySetInnerHTML={{ __html: blog.blog_content }}
						/>

						<div className="mt-20 border border-[#94004F]/30 p-8 md:p-12 rounded-[2.5rem] bg-gray-50/50">
							<h2 className="text-2xl md:text-3xl font-bold text-[#94004F] mb-8">
								Leave a comment
							</h2>
							<form onSubmit={handleCommentSubmit} className="grid grid-cols-1 gap-6">
								<div className="space-y-2">
									<label className="text-sm font-bold text-gray-700">Name</label>
									<input
										name="name"
										type="text"
										placeholder="Enter your name"
										className="w-full bg-gray-100/80 p-4 rounded-xl focus:ring-2 focus:ring-[#94004F] outline-none border-none transition-all"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-sm font-bold text-gray-700">Email</label>
									<input
										name="email"
										type="email"
										placeholder="Enter your email"
										className="w-full bg-gray-100/80 p-4 rounded-xl focus:ring-2 focus:ring-[#94004F] outline-none border-none transition-all"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-sm font-bold text-gray-700">Comment</label>
									<textarea
										name="comment"
										placeholder="Comment here"
										className="w-full bg-gray-100/80 p-4 rounded-xl h-40 focus:ring-2 focus:ring-[#94004F] outline-none border-none transition-all"
									/>
								</div>
								<button
									disabled={postingComment}
									className="bg-[#94004F] text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all w-fit disabled:opacity-70"
								>
									{postingComment ? "Posting..." : "Post Now"} <Send size={18} />
								</button>
							</form>
						</div>
					</article>

					{/* --- Sidebar Area --- */}
					<aside className="lg:col-span-4 space-y-12">
						<form onSubmit={handleSearch} className="relative flex items-center">
							<input
								name="keyword"
								type="text"
								placeholder="Search"
								className="w-full bg-gray-100 rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#94004F] outline-none border-none"
							/>
							<button
								disabled={searching}
								type="submit"
								className="absolute right-0 top-0 bottom-0 bg-[#94004F] px-4 rounded-r-xl text-white disabled:opacity-70"
							>
								{searching ? (
									<Loader2 className="animate-spin" size={20} />
								) : (
									<Search size={20} />
								)}
							</button>
						</form>

						{/* Other Posts */}
						<div>
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Other Posts</h2>
							<div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
								{otherPosts.map((post, i) => {
									const pId = getPostId(post);
									const pTitle = post.blog_title || "";
									const pImg = post.blog_pic
										? post.blog_pic.startsWith("http")
											? post.blog_pic
											: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/images/blog/${post.blog_pic}`
										: "/post-thumb.jpg";

									return (
										<div
											key={pId || i}
											onClick={() =>
												router.push({
													pathname: "/blog-details",
													query: { id: pId },
												})
											}
											className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl group cursor-pointer hover:bg-white hover:shadow-md transition-all"
										>
											<div className="relative w-24 h-20 flex-shrink-0 rounded-xl overflow-hidden">
												<Image
													src={pImg}
													alt={pTitle}
													fill
													className="object-cover"
												/>
											</div>
											<p className="text-sm font-bold text-[#94004F] leading-snug group-hover:text-[#32A800]">
												{pTitle.length > 40
													? pTitle.substring(0, 40) + "..."
													: pTitle}
											</p>
										</div>
									);
								})}
							</div>
						</div>

						{/* Comments List */}
						<div>
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Comment</h2>
							<div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
								{comments.length > 0 ? (
									comments.map((comment, i) => {
										const formattedDate = comment.added_time
											? new Date(comment.added_time)
													.toLocaleDateString("en-GB", {
														day: "numeric",
														month: "short",
														year: "numeric",
													})
													.replace(/ (\d{4})$/, ", $1")
											: "Recent";

										return (
											<div
												key={i}
												className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
											>
												<div className="flex items-center gap-3 mb-3">
													<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold uppercase">
														{comment.blog_commentor_name?.substring(0, 2) ||
															"AN"}
													</div>
													<div>
														<p className="font-bold text-sm text-gray-900">
															{comment.blog_commentor_name}
														</p>
														<p className="text-[10px] text-gray-400 font-bold uppercase">
															{formattedDate}
														</p>
													</div>
												</div>
												<p className="text-xs text-gray-600 leading-relaxed font-medium">
													{comment.blog_commentor_comment}
												</p>
											</div>
										);
									})
								) : (
									<p className="text-sm text-gray-400 italic">No comments yet.</p>
								)}
							</div>
						</div>
					</aside>
				</div>

				{/* --- Global Download CTA --- */}
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

export default BlogDetailsContent;
