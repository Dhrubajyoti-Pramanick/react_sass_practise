import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef(null);
  return (
    <section className="flex justify-between px-3 bg-slate-300">
      <div className="text-xl font-bold">MIKALTO</div>
      <div className="navbar hidden md:flex justify-center gap-5 text-blue-700" ref={inputRef}>
        <Link className="hover:text-red-700" to="/">
          Back
        </Link>
        <Link className="hover:text-red-700" to="/home">
          Home
        </Link>
        <Link className="hover:text-red-700" to="/about">
          About Us
        </Link>
        <Link className="hover:text-red-700" to="/contact">
          Contact Us
        </Link>
        <Link className="hover:text-red-700" to="/location">
          Location
        </Link>
      </div>
      <div className="md:hidden" onClick={()=>{
        toggle? setToggle(false) : setToggle(true);
        inputRef.current.classList.toggle('move');
      }}>
        {toggle? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </div>
    </section>
  );
};

export default Navbar;
