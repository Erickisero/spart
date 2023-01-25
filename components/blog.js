import React from "react";
import Bloglist from "./Bloglist";
import useFetchData from "./useFetchData";

const Blog = () => {

   const {error, loading, myBlogs} = useFetchData('http://lacalhost:8000/blogs');

    return ( 
        <div className="Blog">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {myBlogs && <Bloglist blogs={myBlogs} title="All Blogs"/>}
        </div>
        
     );
}
 
export default Blog;