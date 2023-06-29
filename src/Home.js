//import { useEffect, useState } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs,isLoading,error} = useFetch('http://localhost:8000/blogs')
    return (
<div className="home">
    { error && <div>{error}</div>}
    {isLoading && <p>Loading....</p>}
    {blogs && <BlogList blogs = {blogs} titles= 'All Blogs' />}
   {/* {blogs && <BlogList blogs = {blogs.filter((blog) => blog.author === 'jhargo')} titles= "Jhargo's Blogs"   /> } */}
    {/* <button onClick={() => setName('James')}>Change Name</button>
    <p>{name}</p> */}
</div>

      );
}
 
export default Home;