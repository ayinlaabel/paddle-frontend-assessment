import logo from "./logo.svg";
import Blur from "react-css-blur";
import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/about/About";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [display, setDisplay] = useState(null);
  const [contactDisplay, setContactDisplay] = useState();

  function displayContact(data) {
    // console.log(data);
    if (data === true) {
      setDisplay("data");
      data = !data;
      setContactDisplay(data);
    } else {
      contactDisplay = true
      setDisplay(null);
      data = !data;
      setContactDisplay(data);
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
          <Route exact path="/coming-soon" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
