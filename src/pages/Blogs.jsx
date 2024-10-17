import { useEffect } from "react";

import { Link } from "react-router-dom";
import blogs from "../../data/blogPosts";
import BlogCard from "../components/BlogCard";

const Blog = () => {

  useEffect(() => {

    window.scrollTo(0, 0)

  }, []);

  return (
    <>
    <h1 className="text-xl xs:text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800 font-bold xs:font-extrabold text-center mt-4 sm:mt-6 md:mt-10 mb-4 sm:mb-6">Read Our Blog Posts</h1>
    <div className="w-4/5 sm:w-full border-2 border-slate-800 mx-auto mt-0 mb-6 sm:mb-8 md:mb-10"></div>
    {blogs.map((blog, index) => (
      <Link to={`${blog.id}`} key={index}>
      <BlogCard blog={blog} notPreview={true} />
      </Link>
    )
  )}
    </>
  )
}

export default Blog;