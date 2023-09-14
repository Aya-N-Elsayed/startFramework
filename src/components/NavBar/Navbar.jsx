import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {

  function activeLink(link) {
    
    // const navLinks = document.querySelectorAll('.nav-link');
    //remove active class
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`.${ link }`).classList.add('active');
    console.log(`${ link }`);

  }
  return (
    <div className={style.nav}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container text-white">
          <Link className="navbar-brand home active fw-bolder fs-2" onClick={function(){
            activeLink("home");
          }} to="/home">
            START FRAMEWORK{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link  about fw-bold"
                  aria-current="page"
                  onClick={function(){
                    activeLink("about");
                  }} to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold portfolio" onClick={function(){
            activeLink("portfolio");
          }} to="/portfolio">
                  PORTFOLIO
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-bold contact" onClick={function(){
            activeLink("contact");
          }}to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
