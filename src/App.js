// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Services from "./component/Services";
import Team from "./component/Team";
import BottomNavbar from "./component/BottomNavbar";

// CSS imports

function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      {/* <Route path="/" element={ <BottomNavbar/> } /> */}
      
    </Routes>
    <Footer />

    </>
  );
}

export default App;
