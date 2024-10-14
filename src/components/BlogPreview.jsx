
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import data from '../../data/blogPosts';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
const BlogPreview = () => {
  return (
    <section className="mb-10 sm:mb-20 px-10 sm:px-0">
        <h2 className="text-xs lg:text-sm text-sky-300 font-bold mb-4">Blog Posts</h2>
        <Carousel opts={{loop: true}}>
            <CarouselContent className='items-center'>
                {data.map((item, index) => (
                    <CarouselItem key={index} className="basis-[80%] xs:basis-[65%] sm:basis-1/2 md:basis-1/3">
                        <Link to={`blogs/${item.id}`}>
                            <BlogCard blog={item} preview={false}/>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className='bg-slate-800 border-slate-600 text-sky-200 active:scale-90 hover:bg-slate-800 hover:text-sky-200' />
            <CarouselPrevious className='bg-slate-800 border-slate-600 text-sky-200 active:scale-90 hover:bg-slate-800 hover:text-sky-200' />
        </Carousel>
        <Link to={`blogs`} className="p-[6px] xs:p-2 text-[10px] xs:text-xs border-2 border-sky-800 rounded-lg text-slate-400 block my-1 sm:my-2 mx-auto text-center w-fit">
            Read All
        </Link>
    </section>
  )
}

export default BlogPreview;