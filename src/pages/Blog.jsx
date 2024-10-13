import { useParams } from "react-router-dom";
import data from "../../data/blogPosts";

const Blog = () => {
  const { id } = useParams();
  const [ blog ] = data.filter(post => post.id == id);
 
  return (
    <div className="text-sky-400">
      <h2>blog</h2>
      {id}
      {blog.title}
      <p>{blog.content}</p>
    </div>
  )
}

export default Blog