import React from "react";
import "./Nav.css";
import logo from "./../assets/images/metricks-white.png";

function Nav() {
  return (
    <nav className="navs">
      <div className="branding">
        <img src={logo} alt="" className="branding__logo" />
        <p className="branding__title">Matricks</p>
      </div>
      <div className="navsbar">
        <div className="menu">
          <div className="menu__item">
            <a href="#" className="menu__link">
              About us
            </a>
          </div>
          <div className="menu__item">
            <a href="#" className="menu__link">
              Blog
            </a>
          </div>
          <div className="menu__item contact">
            <a href="#" className="menu__link">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
