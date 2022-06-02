import React from "react";
import {
  FaYoutube,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="icon">
          <div>
            <FaYoutube />
          </div>
          <div>
            <FaFacebookSquare />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaTwitterSquare />
          </div>
        </div>
        <div className="footer__link">
          <div className="">
            <a href="">Terms of service</a>
          </div>
          <div className="">
            <a href="">Privacy policy</a>
          </div>
        </div>
        <div className="footer__copyright">
          <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
