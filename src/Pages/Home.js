import React from "react";
import { useNavigate } from "react-router-dom";


const Home = ({name}) =>{

    const navigate = useNavigate()

    return(
        <div>
            <h1>Welcome {name}</h1>
            <p>This is Home page</p>

            <button onClick={() =>navigate(-1)}>Back</button>
            <button onClick={() =>navigate(-1)}>Next</button>
        </div>
    );
}

export default Home;