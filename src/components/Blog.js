import React from "react";

const Blog = () => {
  return (
    <div style={style.blogContainer}>
          <h1>Blog</h1>

         <div style={style.post}>
           <h2>How i started with React</h2>
        <p> When I first know about React, I am excited  to work on that . And i dstarted watching videos and learning from react content available in web and trying myself, gradually i started  understood how components work, how to do routing and many more.  It was fun to see how it working.</p>
      </div>

      <div style={style.post}>
        <h2>What i learned about Routing</h2>
        <p> I used  to learn various thing like how react-router-dom to switch between pages and Routing and many various thing . It feels good when clicking buttons actually shows a different page .
      
        </p>
      </div>

    </div>
  );
};


const style = {
  blogContainer: {
     textAlign: "center",
    borderRadius: "10px",
    padding: "40px",
    backgroundColor: "rgba(125, 61, 185, 0.93)",
   
    margin: "30px",
  },


  post: {
    backgroundColor: "white",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "10px",

    textAlign: "left",
  },
};

export default Blog;
