import React, { useState } from "react";
import "./Nav.css";
import logo from "./../../assets/images/metricks-white.png";
import { Link } from "react-router-dom"

function Nav({ test }) {
  const [click, setClick] = useState(false)
  // let click = false;

  function contactUs() {
    console.log(click);
    setClick(true)
    test(true);
  }

  return (
    <nav className="navs">
      <div className="branding">
        <img src={logo} alt="" className="branding__logo" />
        <p className="branding__title">Matricks</p>
      </div>
      <div className="navsbar">
        <div className="menu">
          <div className="menu__item">
            <Link to="/about" className="menu__link">
              About us
            </Link>
          </div>
          <div className="menu__item">
            <Link to="/blog" className="menu__link">
              Blog
            </Link>
          </div>
          <div onClick={contactUs} className="menu__item contact">
            <div className="menu__link">Contact us</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
