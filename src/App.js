
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Service from './components/Service.js';
import Contact from './components/Contact.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';


console.log("Header:", Header);
console.log("Navbar:", Navbar);
console.log("Home:", Home);
console.log("About:", About);
console.log("Footer:", Footer);

function App() {
  return (
    <div>
         <Router>
          <Header />
           <Navbar />
           <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          
           </Routes>
           <Footer />
           </Router>
    </div>
  );
}

export default App;

