import React from "react";
import {Link} from 'react-router-dom';

const Navbar =()=>{
    return (
      <nav style={style.navbar}>
        <Link to="/" style={style.link}>Home</Link>
        <Link to="/about" style={style.link}>About</Link>
        <Link to="/service" style={style.link}>Service</Link>
        <Link to="/contact" style={style.link}>Contact</Link>
        <Link to="/blog" style={style.link}>Blog</Link>
      </nav> 
    );
     
};

const style={
    navbar: {
        display:'flex',
        backgroundColor: 'rgba(148, 67, 224, 0.83)',
        padding:'10px',
        justifyContent:'center',
    },

    link:{
        color:'white',
        margin:'0 15px',
        fontWeight:'bold',


    }
};

export default Navbar;
