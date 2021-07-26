import React from "react";
import "./Footer.css";
import logo from "../../../icons/logo2.png";
import { FiGlobe } from "react-icons/fi";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="f-part">
        <div className="container">
          <div className="row d-flex align-self-center justify-content-around">
            <div className="col-sm-12 col-md-4">
              <div className="mb-4">
                <h4
                  className="fw-bold"
                  style={{ fontFamily: "'Cinzel Decorative', cursive" }}
                >
                  <img src={logo} alt="Wisdom law" width="50" height="40" />
                  WISDOM <span> LAW</span>
                </h4>
                <p className="pt-3 pl-3">Consult Us Now</p>
                <form>
                  <div className="form-group">
                    <input
                      style={{ borderRadius: "24px" }}
                      type="email"
                      className="form-control py-4 border border-primary shadow bg-transparent text-white"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="px-5 mx-5">
                <h2>Explore</h2>
                <ul className="list-unstyled">
                  <li>About</li>
                  <li>Cases</li>
                  <li>Practice Areas</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="mb-4 px-5">
                <h2>Legal</h2>
                <ul className="list-unstyled">
                  <li>Join us</li>
                  <li>Blog</li>
                  <li>Privacy & Policy</li>
                  <li>Term & Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ backgroundColor: "#000877" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="mb-3 mt-5">
                  <span className="p-3 border border-primary rounded-circle f-icon">
                    <FiGlobe size="1.5em" />
                  </span>
                  <span className="p-3 border border-primary rounded-circle f-icon">
                    <FaTwitter size="1.5em" />
                  </span>
                  <span className="p-3 border border-primary rounded-circle f-icon">
                    <FaFacebookF size="1.5em" />
                  </span>
                  <span className="p-3 border border-primary rounded-circle f-icon">
                    <FaInstagram size="1.5em" />
                  </span>
                  <span className="p-3 border border-primary rounded-circle f-icon">
                    <FaYoutube size="1.5em" />
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <p className="mb-5 mt-5" style={{ fontSize: "20px" }}>
                  Copyright © 2021 All rights reserved by Tania Chanda
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
