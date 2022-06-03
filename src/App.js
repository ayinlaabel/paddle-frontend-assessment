import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Contact from "./components/contact/Contact";
import Blur from "react-css-blur";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [display, setDisplay] = useState(null);
  const [contactDisplay, setContactDisplay] = useState(null);

  function displayContact(data) {
    console.log(data);
    if (display === null) {
      setDisplay("data");
      data = !data;
      setContactDisplay( "data");
    } else {
      contactDisplay = true;
      setDisplay(null);
      data = !data;
    }
  }

  // function dd(data){
  //   if (display === null) {
  //     setDisplay("data");
  //     data = !data;
  //     setContactDisplay(data);
  //   } else {
  //     setDisplay(null);
  //     data = !data;
  //     setContactDisplay(data);
  //   }
  // }
  return (
    <div className="App">
      <Router>
        <Nav test={displayContact} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/coming-soon" />} />
          <Route exact path="/coming-soon" element={<Home data={contactDisplay} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
