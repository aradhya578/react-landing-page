import React from "react";

const Contact = () => {
  return (
    <div style={contactStyle.container}>
      <h1>Contact Us</h1>
      <p>You all can reach out to me for any queries or support.</p>
      <p>
        thank you!
      </p>
      <p>Email: iamaradhyakesharwani@gmail.com</p>
      <p>Phone: 73104XXXXX</p>
      <p>Address: Prayagraj UttarPradesh, India</p>
    </div>
  );
};


const contactStyle = {
  container: {
    backgroundColor: "#7d3db9", 
    padding: "80px",
    borderRadius: "10px",
     margin: "30px",
    textAlign: "center",
     fontWeight:'bold',
    marginTop: "30px"
  }
};

export default Contact;
