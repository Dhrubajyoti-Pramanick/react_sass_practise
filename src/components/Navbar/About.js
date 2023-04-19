import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
const About = () => {
  return (<>
  <div className='move2'>This is About page</div>
    <button className='moveBtn'><Link to="/">Go back</Link></button>
  </>
    
  )
}

export default About