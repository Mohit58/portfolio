import Home from './components/Home.js';
import Contact from './components/Contact';
import About from './components/About.js';
import Layout from './components/Layout';
import Timeline from './components/Timeline';
import {Route,Routes} from 'react-router-dom'
import React from "react";
import Projects from './components/Projects.js';
import './app.css';
function App() {
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
