import React,{useState} from "react";
import "./App.css";

//pages 1 imports

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import {Routes, Route} from "react-router-dom";
import Navbar from "./Pages/Navbar";


const App = () =>{

  const [count, setCount] = useState(0);

  return(
    
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home name="Harisha G B"/>} />
        <Route path="/blog" element={<Blog count={count} setCount={setCount}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact count={count} />} />
      </Routes>
      
    </div>
  );
}

export default App;