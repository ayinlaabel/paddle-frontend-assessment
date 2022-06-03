import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Contact from "../components/contact/Contact";
import About from "./about/About";
import Commingsoon from "./comingsoon/Comingsoon";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Home = ({ data }) => {
  const [display, setDisplay] = useState(null);
  const [contactDisplay, setContactDisplay] = useState(null);

  function displayContact(data) {
    console.log(data);
    if (display === null) {
      setDisplay("data");
      data = !data;
      setContactDisplay("data");
    } else {
      contactDisplay = true;
      setDisplay(null);
      data = !data;
    }
  }
  return (
    < div className="Home">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/coming-soon" />} />
        <Route path="/coming-soon" element={<Commingsoon />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default Home;
