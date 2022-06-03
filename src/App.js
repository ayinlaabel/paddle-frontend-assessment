import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Github from "./pages/github/Github";
import Contact from "./components/contact/Contact";
import Blur from "react-css-blur";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Comingsoon from "./pages/comingsoon/Comingsoon";

function App() {
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
        <Routes>
          <Route path="/" element={<Home />}>
            <Route exact path="/coming-soon" element={<Comingsoon />} />
            <Route exact path="/about" element={<About />} />
          </Route>
          <Route exact path="/github" element={<Github />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
