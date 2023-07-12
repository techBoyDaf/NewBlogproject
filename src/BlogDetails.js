import {useParams}from "react-router-dom"
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
    const {data, error, isLoading} = useFetch('https://dummyjson.com/posts/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('https://dummyjson.com/posts/' + id, {
            method:'DELETE'
        }).then(() => {
            history.push('/');
        })
       console.log("render") 
    }
    return ( 
        <div className="blog_details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;