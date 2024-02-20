import React from "react";
import { useNavigate } from "react-router-dom";


const Contact = ({count}) =>{

    let navigate = useNavigate()
         


    return(
        <div>
            <h1>Value of count - {count}</h1>
            <p>This is Contact page</p>
            <button onClick={() => navigate("/blog")}> Go to Blog 1</button>
            {/* <button onClick={() => navigate("blog")}> Go to Blog 2</button> */}

            <button onClick={() =>navigate(-1)}>Back</button>
            <button onClick={() =>navigate(-1)}>Next</button>
        </div>
    );
}

export default Contact;