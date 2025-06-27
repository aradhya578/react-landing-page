import React from "react";


const About=()=>{
    return (
        <div style={style.container}>
        <h2>About Us</h2>
        <p>Hi, I am Aradhya Kesharwani, a computer science student. I am working on React and trying to make a landing page.  I used routing to show different pages like home, about, contact,Blog etc. Still doing learning and improving this landing page!</p>

        </div> 
    );
};

const style={
    container:{
    
     
     textAlign:'center',

    padding:'185px',
    flexWrap:'wrap',

    backgroundColor: 'rgba(125, 61, 185, 0.93)',
    borderRadius: "10px",
     margin: "30px",
    justifyContent:'center',


    },

};

export default About;





