const BlogCard = ({blog, notPreview}) => {
  return (
    <div className="break-words flex flex-col justify-center border-2 border-slate-600 mb-6 xs:mb-8 bg-slate-800 p-3 xs:p-4 rounded-md md:rounded-lg mt-3 sm:mt-4 min-h-fit sm:min-h-24 md:min-h-32">
        <h3 className="text-sky-200 font-semibold sm:font-bold text-sm xs:text-base lg:text-lg mb-6 sm:mb-10">{blog.title}</h3>
        <div className="flex justify-between flex-wrap gap-2">
            <p className="text-sky-400 font-bold text-sm md:text-base break-words">{blog.author}</p>
            {notPreview && <p className="text-sky-400 font-bold text-sm md:text-base">{blog.publishedDate}</p>}
        </div>
    </div>
  )
}

export default BlogCard