import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, body}
        fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }).then(() => {
      setIsLoading(false)
      history.push("/")
    })
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog Body: </label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)} > </textarea>
                

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding new blog...</button>}
                
                

                


            </form>
        </div>
     );
}
 
export default Create;