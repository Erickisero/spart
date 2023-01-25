import { useState, useEffect } from "react";

const useFetchData = (url) => {
    const [myBlogs, setMyblogs]= useState(null);
    const [loading, setLoading]=useState(true);
    const [error, setError] =useState(null);

    useEffect(()=>{
        setTimeout(()=>{
        fetch(url)
        .then(res=>{
            //checking for server error
            if(!res.ok){
                throw Error("Error connecting to server");
            }
            console.log(res)
            return res.json();
        })
        .then(data =>{
            setMyblogs(data);
            setLoading(false);
            setError(null);
        })
        //checking network erroer...
        .catch(err =>{
            //console.log(err.message);
            setError(err.message);
            setLoading(false);
        })
    },1000);

    },[url]);
    return (myBlogs, loading, error );
}
 
export default useFetchData;