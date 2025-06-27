import React from "react";
import Feature from "./Feature.js";

const Home=()=>{
    return (
       <div>
        <h1 style={styles.heading}>       Hi! This is a Home Page of Landing Page .Welcome To You All!                </h1>
        

        <div style={styles.featureContainer}>
        <Feature title="Fast" description="This app loads quickly"/>
        <Feature title="Responsive" description="look good in all devices."/>
        <Feature title="Simple to use" description=" easy navigation."/>


        </div>
       </div>
    );
};

const styles ={
    featureContainer:{
    display:'flex',
    flexWrap:'wrap',
    backgroundColor: 'rgba(125, 61, 185, 0.93)',
     padding:'90px',
    justifyContent:'center',
    borderRadius: "10px",
     margin: "30px",

    },

    heading:{

    textAlign: "center",
    padding: "40px",
    backgroundColor: "rgba(125, 61, 185, 0.93)",
    borderRadius: "10px",
     margin: "30px",
    fontWeight: "bold",
    padding:'40px',
    }

};

export default Home;

