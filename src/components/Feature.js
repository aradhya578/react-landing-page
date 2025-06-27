import React from 'react';



const Feature = ({ title, description }) => {
  return (
    <div style={styles.box}>
          <h2>{title}</h2>
           <p>{description}</p>


    </div>
  );
};


const styles= {

  box: {
    
    backgroundColor: 'rgb(176, 117, 210)',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    width: '300px',
  }
};

export default Feature;