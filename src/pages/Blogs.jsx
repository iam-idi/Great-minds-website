
import { Link } from "react-router-dom";
import blogs from "../../data/blogPosts";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <>
    <h1 className="text-xl xs:text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800 font-bold xs:font-extrabold text-center mt-12 mb-6">Read Our Blog Posts</h1>
    <div className="w-4/5 sm:w-full h-[3px] bg-slate-800 mx-auto mt-0 mb-16"></div>
    {blogs.map((blog, index) => (
      <Link to={`${blog.id}`} key={index}>
      <BlogCard blog={blog} />
      </Link>
    )
  )}
    </>
  )
}

export default Blog;