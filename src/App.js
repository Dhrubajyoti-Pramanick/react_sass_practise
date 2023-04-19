import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/Home";
import About from "./components/Navbar/About";
import Contact from "./components/Navbar/Contact";
import Location from "./components/Navbar/Location";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/hero";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Navbar />
        <Hero/>
      </BrowserRouter>
    </>
  );
}

export default App;
