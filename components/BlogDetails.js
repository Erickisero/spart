import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetchData from "./useFetchData";

const BlogDetails = () => {
    const {id}=useParams();
    const {myBlogs, error,loading}=useFetchData('http://localhost:8000/blogs/' + id);
    const history = useHistory();


    const handleDelete =()=>{
        fetch('http://localhost:8000/blogs/' + myBlogs.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
        
    }

    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {loading && <div>loading...</div>}
            {myBlogs &&(
                <article>
                    <h5>{myBlogs.title}</h5>
                    <p>Done by:{myBlogs.author}</p>
                    <div>{myBlogs.body}</div>
                    <button className="mb-3" onClick={handleDelete}>Delete Blog</button>     

                </article>

            )}

        </div>
     );
}
 
export default BlogDetails;