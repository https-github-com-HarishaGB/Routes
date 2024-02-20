import React from "react";
import { useNavigate } from "react-router-dom";


const Blog = ({count, setCount}) =>{

    const navigate = useNavigate()

    return(
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
            <h1>Blog</h1>
            <p>This is Blog page</p>
            <br/>

            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>

            <br/>

            <button onClick={() =>navigate(-1)}>Back</button>
            <button onClick={() =>navigate(-1)}>Next</button>
        </div>
    );
}

export default Blog;