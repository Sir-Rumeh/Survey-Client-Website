import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Loader2, Search } from "lucide-react";
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

const BlogContent = () => {
	const router = useRouter();

	const [posts, setPosts] = useState<Blog[]>([]);
	const [popularPosts, setPopularPosts] = useState<Blog[]>([]);
	const [otherPosts, setOtherPosts] = useState<Blog[]>([]);
	const [comments, setComments] = useState<BlogComment[]>([]);
	const [postingComment, setPostingComment] = useState<boolean>(false);
	const [searching, setSearching] = useState<boolean>(false);

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
			}
		})();
	}, []);

	useEffect(() => {
		const fetchComments = async () => {
			const blogId = getPostId(posts[0]); // Assuming the first post is the one you want to fetch comments for
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
			// If search is cleared, you might want to reload recent posts
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
		const name = formData.get("name")?.toString().trim() || "";
		const email = formData.get("email")?.toString().trim() || "";
		const comment = formData.get("comment")?.toString().trim() || "";

		// Basic Validation
		if (!name) {
			toast.error("Please enter your name");
			return;
		}
		if (!email) {
			toast.error("Please enter your email");
			return;
		}
		// Basic Email Regex
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			toast.error("Please enter a valid email address");
			return;
		}
		if (!comment) {
			toast.error("Please enter a comment");
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
							<div className="space-y-8 max-h-[650px]">
								{popularPosts.length > 0 ? (
									popularPosts.map((post, i) => {
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
									})
								) : (
									<div className="text-sm text-gray-500">No popular posts available.</div>
								)}
							</div>
						</section>
					</div>

					{/* --- Sidebar Area (4 Columns) --- */}
					<aside className="lg:col-span-4 space-y-12">
						{/* Search Bar */}
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

						{/* Other Posts */}
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
												router.push({
													pathname: "/blog-details",
													query: { id },
												})
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
								{posts.length <= 1 && (
									<div className="text-sm text-gray-500">No other posts available.</div>
								)}
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
												<Image
													src={CommentorImg}
													alt={"commentor_img"}
													height={40}
													width={40}
													className="object-cover"
												/>
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

						{/* Leave a Comment Form */}
						<div className="border border-[#94004F]/30 p-8 rounded-[2rem]">
							<h2 className="text-2xl font-bold text-[#94004F] mb-6">Leave a comment</h2>
							<form noValidate onSubmit={handleSubmit} className="space-y-4">
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
									className="bg-[#94004F] text-white w-full py-3 rounded-lg font-bold text-sm hover:brightness-110 disabled:bg-[#94004F]/70 transition-all active:scale-95 flex items-center justify-center gap-2"
								>
									{postingComment ? <Loader2 className="animate-spin" /> : <>Post Now</>}
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
