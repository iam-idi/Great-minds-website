import { Link, useParams } from "react-router-dom";
import data from "../../data/blogPosts";
import { FaArrowLeft } from "react-icons/fa";

const Blog = () => {
  const { id } = useParams();
  const [ blog ] = data.filter(post => post.id == id);
 
  return (
    <section className="text-sky-400">
      <Link to='/blogs' className="flex items-center gap-1 sm:gap-2 text-slate-400 mb-4 xs:mb-6 md:mb-8 mt-2 xs:mt-3 sm:mt-6 w-fit"><FaArrowLeft className="text-lg md:text-xl" /><span className="text-sm md:text-base">Back</span></Link>
      <div className="text-center text-sky-400 px-2 xs:px-3 md:px-6 xl:px-8">
        <h2 className="text-base xs:text-lg md:text-xl xl:text-2xl font-bold sm:font-extrabold mb-1 sm:mb-2 md:mb-3">{blog.title}</h2>
        <h3 className="text-sm xs:text-base md:text-lg text-sky-600 font-bold">{blog.author}</h3>
        <p className="text-left mt-4 xs:mt-6 sm:mt-8 mb-10 text-base xl:text-xl text-slate-400">{blog.content}</p>
      </div>
    </section>
  )
}

export default Blog