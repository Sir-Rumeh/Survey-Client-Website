import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Loader2, Search, Send } from "lucide-react";
import { useRouter } from "next/router";
import StoreButtons from "../shared/StoreButtons";
import {
	getRecentBlogPosts,
	getPopularBlogs,
	Blog,
	fetchCommentsByBlog,
	postBlogComment,
	BlogComment,
	getOtherBlogs,
	searchBlogs,
} from "@/config/blog-actions";
import BlogImg from "@/assets/images/BlogImg.png";
import CommentorImg from "@/assets/images/CommentorImg.png";
import toast from "react-hot-toast";

// --- Skeleton Component ---
const BlogSkeleton = () => (
	<div className="animate-pulse space-y-12">
		{/* Latest Post Skeleton */}
		<div className="space-y-6">
			<div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
			<div className="aspect-video bg-gray-200 rounded-[2rem]"></div>
			<div className="h-8 bg-gray-200 rounded w-3/4"></div>
			<div className="space-y-3">
				<div className="h-4 bg-gray-200 rounded w-full"></div>
				<div className="h-4 bg-gray-200 rounded w-5/6"></div>
			</div>
		</div>
		{/* Popular Posts Skeleton */}
		<div className="space-y-8">
			<div className="h-8 bg-gray-200 rounded w-48"></div>
			{[1, 2, 3].map((i) => (
				<div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-[2rem]">
					<div className="w-full md:w-48 h-32 bg-gray-200 rounded-xl flex-shrink-0"></div>
					<div className="flex-1 space-y-4 py-2">
						<div className="h-6 bg-gray-200 rounded w-2/3"></div>
						<div className="h-4 bg-gray-200 rounded w-full"></div>
					</div>
				</div>
			))}
		</div>
	</div>
);

const BlogContent = () => {
	const router = useRouter();

	const [posts, setPosts] = useState<Blog[]>([]);
	const [popularPosts, setPopularPosts] = useState<Blog[]>([]);
	const [otherPosts, setOtherPosts] = useState<Blog[]>([]);
	const [comments, setComments] = useState<BlogComment[]>([]);
	const [postingComment, setPostingComment] = useState<boolean>(false);
	const [searching, setSearching] = useState<boolean>(false);
	const [initialLoading, setInitialLoading] = useState<boolean>(true);

	const normalizeResponseToArray = (res: any): Blog[] => {
		if (!res) return [];
		if (Array.isArray(res)) return res as Blog[];
		if (Array.isArray(res?.data)) return res.data as Blog[];
		if (Array.isArray(res?.blogs)) return res.blogs as Blog[];
		if (Array.isArray(res?.results)) return res.results as Blog[];
		return [];
	};

	const getPostId = (p: Blog | any) => p?.blog_id ?? p?.id ?? p?.blogid ?? p?.blogId ?? p?._id ?? null;

	useEffect(() => {
		(async () => {
			try {
				const [recentRes, popularRes, otherRes] = await Promise.all([
					getRecentBlogPosts({ numOfBlogs: 6 }),
					getPopularBlogs({ numOfBlogs: 3 }),
					getOtherBlogs({ numOfBlogs: 4 }),
				]);
				setPosts(normalizeResponseToArray(recentRes));
				setPopularPosts(normalizeResponseToArray(popularRes));
				setOtherPosts(normalizeResponseToArray(otherRes));
			} catch (err) {
				console.error("Error fetching blog posts:", err);
			} finally {
				setInitialLoading(false);
			}
		})();
	}, []);

	useEffect(() => {
		const fetchComments = async () => {
			const blogId = getPostId(posts[0]);
			if (!blogId) return;
			try {
				const comments = await fetchCommentsByBlog(blogId);
				setComments(comments);
			} catch (error) {
				console.error(`Fetching comments for blog ${blogId} failed:`, error);
			}
		};

		fetchComments();
	}, [posts]);

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const keyword = formData.get("keyword")?.toString().trim() || "";

		if (!keyword) {
			const recentRes = await getRecentBlogPosts({ numOfBlogs: 6 });
			setPosts(normalizeResponseToArray(recentRes));
			return;
		}

		setSearching(true);
		try {
			const results = await searchBlogs({ keyword });
			const normalizedResults = normalizeResponseToArray(results);
			setPosts(normalizedResults);

			if (normalizedResults.length === 0) {
				toast.error("No blogs found matching your search.");
			}
		} catch (error) {
			toast.error("Search failed. Please try again.");
		} finally {
			setSearching(false);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const blogId = getPostId(posts[0]);
		if (!blogId) {
			toast.error("Unable to identify the blog post.");
			return;
		}

		const form = e.currentTarget;
		const formData = new FormData(form);

		const honeypot = formData.get("website_url")?.toString();
		if (honeypot) {
			return;
		}

		const name = formData.get("name")?.toString().trim() || "";
		const email = formData.get("email")?.toString().trim() || "";
		const comment = formData.get("comment")?.toString().trim() || "";

		if (!name || !email || !comment) {
			toast.error("Please fill in all fields");
			return;
		}

		const loadingToast = toast.loading("Posting your comment...");
		setPostingComment(true);
		try {
			const postCommentRes = await postBlogComment({
				name: name,
				email: email,
				comment: comment,
				blogid: blogId,
				added_time: new Date().toISOString(),
			});

			if (postCommentRes) {
				toast.success("Comment posted successfully!", { id: loadingToast });
				form?.reset();
				const newComments = await fetchCommentsByBlog(blogId);
				setComments(newComments);
			}
		} catch (error) {
			toast.error("Failed to post comment", { id: loadingToast });
		} finally {
			setPostingComment(false);
		}
	};

	return (
		<div className="bg-white min-h-screen">
			<div className="relative h-[400px] w-full bg-slate-900 overflow-hidden flex items-center justify-center rounded-br-3xl rounded-bl-3xl">
				<div className="absolute inset-0 opacity-40">
					<Image src={BlogImg} alt="Blog Background" fill className="object-cover" />
				</div>
				<h1 className="relative z-10 text-white text-5xl md:text-7xl font-extrabold tracking-tight">
					Blog
				</h1>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="lg:col-span-8">
						{initialLoading ? (
							<BlogSkeleton />
						) : (
							<div className="space-y-16">
								{/* Latest Post */}
								<section>
									<h2 className="text-3xl font-bold text-[#94004F] mb-8">
										{searching ? "Search Results" : "Latest Post"}
									</h2>
									<div className="space-y-6">
										{posts[0] ? (
											(() => {
												const latest = posts[0];
												const id = getPostId(latest);
												const title = latest?.blog_title ?? "Latest Post";
												const raw = latest?.blog_content ?? "";
												const excerpt =
													raw.replace(/<[^>]+>/g, "").slice(0, 280) +
													(raw.length > 280 ? "..." : "");
												const img = latest?.blog_pic
													? latest.blog_pic.startsWith("http")
														? latest.blog_pic
														: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? ""}/images/blog/${latest.blog_pic}`
													: "/post-image.jpg";
												return (
													<>
														<div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg">
															<Image
																src={img}
																alt={title}
																fill
																className="object-cover"
															/>
														</div>
														<h3 className="text-2xl md:text-3xl font-bold text-[#94004F]">
															{title}
														</h3>
														<p className="text-gray-700 leading-relaxed text-lg">
															{excerpt}{" "}
															<button
																onClick={() =>
																	router.push({
																		pathname: "/blog-details",
																		query: { id },
																	})
																}
																className="text-[#94004F] font-bold cursor-pointer"
															>
																Read more
															</button>
														</p>
													</>
												);
											})()
										) : (
											<div className="py-10 text-center text-gray-500">
												{searching ? (
													<Loader2 className="animate-spin mx-auto" />
												) : (
													"No posts found."
												)}
											</div>
										)}
									</div>
								</section>

								{/* Popular Posts */}
								<section>
									<h2 className="text-3xl font-bold text-[#94004F] mb-8">Popular Posts</h2>
									<div className="space-y-8">
										{popularPosts.map((post, i) => {
											const id = getPostId(post);
											const title = post?.blog_title ?? "Untitled";
											const excerpt = (post?.blog_content ?? "")
												.replace(/<[^>]+>/g, "")
												.slice(0, 140);
											const img = post?.blog_pic
												? post.blog_pic.startsWith("http")
													? post.blog_pic
													: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? ""}/images/blog/${post.blog_pic}`
												: "/post-thumb.jpg";
											return (
												<div
													key={id ?? i}
													className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-6 rounded-[2rem]"
												>
													<div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden">
														<Image
															src={img}
															alt={title}
															fill
															className="object-cover"
														/>
													</div>
													<div className="space-y-3">
														<h4 className="text-xl font-bold text-[#94004F]">
															{title}
														</h4>
														<p className="text-sm text-gray-600 line-clamp-2">
															{excerpt}
														</p>
														<button
															onClick={() =>
																router.push({
																	pathname: "/blog-details",
																	query: { id },
																})
															}
															className="text-[#94004F] text-xs font-bold cursor-pointer"
														>
															Read more
														</button>
													</div>
												</div>
											);
										})}
									</div>
								</section>
							</div>
						)}
					</div>

					{/* Sidebar */}
					<aside className="lg:col-span-4 space-y-12">
						<form onSubmit={handleSearch} className="relative flex items-center">
							<input
								name="keyword"
								type="text"
								placeholder="Search"
								className="w-full bg-gray-100 rounded-lg py-3 px-4 focus:outline-none border border-gray-200"
							/>
							<button
								disabled={searching}
								type="submit"
								className="absolute right-0 bg-[#94004F] p-3 rounded-r-lg text-white disabled:opacity-70"
							>
								{searching ? (
									<Loader2 className="animate-spin" size={20} />
								) : (
									<Search size={20} />
								)}
							</button>
						</form>

						<div>
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Other Posts</h2>
							<div className="space-y-4 max-h-[500px] overflow-y-auto">
								{posts.slice(1, 5).map((post, i) => {
									const id = getPostId(post);
									const title = post?.blog_title ?? "Untitled";
									const img = post?.blog_pic
										? post.blog_pic.startsWith("http")
											? post.blog_pic
											: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? ""}/images/blog/${post.blog_pic}`
										: "/post-thumb.jpg";
									return (
										<div
											key={id ?? i}
											className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl group cursor-pointer hover:bg-white hover:shadow-md transition-all"
											onClick={() =>
												router.push({ pathname: "/blog-details", query: { id } })
											}
										>
											<div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
												<Image
													src={img}
													alt={title}
													fill
													className="object-cover"
												/>
											</div>
											<p className="text-sm font-bold text-[#94004F] leading-snug">
												{title}
											</p>
										</div>
									);
								})}
							</div>
						</div>

						{/* Comments Section */}
						<div>
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Comments</h2>
							<div className="w-full max-h-[500px] overflow-y-auto">
								{comments.length > 0 ? (
									comments.map((comment) => (
										<div
											key={comment.blog_comment_id}
											className="bg-gray-50 p-6 rounded-xl space-y-4 mb-4"
										>
											<div className="flex items-center gap-3">
												<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold uppercase">
													{comment.blog_commentor_name?.substring(0, 2) || "AN"}
												</div>
												<div>
													<p className="font-bold text-sm">
														{comment.blog_commentor_name}
													</p>
													<p className="text-[10px] text-gray-400">
														{new Date(comment.added_time)
															.toLocaleDateString("en-GB", {
																day: "numeric",
																month: "short",
																year: "numeric",
															})
															.replace(/ (\d{4})$/, ", $1")}
													</p>
												</div>
											</div>
											<p className="text-xs text-gray-600 leading-relaxed">
												{comment.blog_commentor_comment}
											</p>
										</div>
									))
								) : (
									<div className="text-sm text-gray-500">No comments available.</div>
								)}
							</div>
						</div>

						{/* Comment Form */}
						<div className="border border-[#94004F]/30 p-8 rounded-[2rem]">
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Leave a comment</h2>
							<form noValidate onSubmit={handleSubmit} className="space-y-4">
								<div className="hidden" aria-hidden="true">
									<input name="website_url" type="text" tabIndex={-1} autoComplete="off" />
								</div>

								<div>
									<label htmlFor="name" className="text-xs font-bold mb-1 block">
										Name
									</label>
									<input
										name="name"
										type="text"
										className="w-full bg-gray-100 p-3 rounded-lg text-sm"
									/>
								</div>
								<div>
									<label htmlFor="email" className="text-xs font-bold mb-1 block">
										Email
									</label>
									<input
										name="email"
										type="email"
										className="w-full bg-gray-100 p-3 rounded-lg text-sm"
									/>
								</div>
								<div>
									<label htmlFor="comment" className="text-xs font-bold mb-1 block">
										Comment
									</label>
									<textarea
										name="comment"
										className="w-full bg-gray-100 p-3 rounded-lg text-sm h-32"
									/>
								</div>
								<button
									disabled={postingComment}
									className="bg-[#94004F] text-white w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
								>
									{postingComment ? (
										<Loader2 className="animate-spin" />
									) : (
										<>
											Post Now <Send size={18} />
										</>
									)}
								</button>
							</form>
						</div>
					</aside>
				</div>
			</div>
		</div>
	);
};

export default BlogContent;
