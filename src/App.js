import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import  Home  from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Banner />} />
        <Route exact path="/home" element={<Banner />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
