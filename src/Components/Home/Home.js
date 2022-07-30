import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./home.css";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div id="container">
      <div className="container_items">
        {/* <h4>This is Home</h4> */}
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
