import React from "react";

const Service = () => {
  return (
    <div style={serviceStyle.container}>
      <h2>Our Services</h2>
      <ul>
        <li> Frontend Development using React</li>
        <li> Responsive Web Design</li>
        <li> API Integration</li>
        <li>Component-Based Architecture</li>
      </ul>
    </div>
  );
};

const serviceStyle = {
  container: {
    backgroundColor: "#7d3db9",
    padding: "130px",
    textAlign: "center",
  
    borderRadius: "10px",
     margin: "30px",
    
    
  }
};

export default Service;
