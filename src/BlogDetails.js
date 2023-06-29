import {useParams}from "react-router-dom"
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'DELETE'
        }).then(() => {
            history.push('/');
        })
        
    }
    return ( 
        <div className="blog_details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;