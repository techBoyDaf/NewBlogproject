import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({posts,titles}) => {
    // const blogs = props.blogs
    // const header = props.titles
    return ( 
        <div className="blog-list">
        <h1>{titles}</h1> 
{posts.map((post) => (
        <div className="blog-preview" key={post.id}>            
            <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
            
            </Link>
            
        </div>
    ) )}
        </div>
     );
}
 
export default BlogList;