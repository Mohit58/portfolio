import Home from './components/Home.js';
import Contact from './components/Contact';
// import Projects from './Components/Projects';
import About from './components/About.js';
import Layout from './components/Layout';
// import Blogs from './Components/Blogs';
import Timeline from './components/Timeline';
import {Route,Routes,useParams} from 'react-router-dom'
import React from "react";
import Projects from './components/Projects.js';
function App() {
  let {id} = useParams();
  console.log(id);
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="/timeline" element={<Timeline/>}/>
      </Routes>
  );
}

export default App;
