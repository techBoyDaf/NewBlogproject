//import { useEffect, useState } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data,isLoading,error} = useFetch('https://dummyjson.com/posts')
    return (
<div className="home">
    { error && <div>{error}</div>}
    {isLoading && <p>Loading....</p>}
    {data && <BlogList posts = {data.posts} titles= 'All Blogs' />}
  
</div>

      );
}
 
export default Home;