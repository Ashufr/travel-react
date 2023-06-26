import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Navbar() {
  const [active, setActive] = useState("navbar");
  function showNav() {
    setActive("navbar active-navbar");
  }

  function removeNav() {
    setActive("navbar");
  }

  return (
    <section className="nav-section">
      <header className="header flex">
        <div className="logo-div">
          <a href="#" className="logo">
            <h1>
              <MdTravelExplore className="icon" /> Travel
            </h1>
          </a>
        </div>

        <div className={active} /* navbar */>
          <ul className="nav-list flex">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Packages
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
            <div className="close-navbar" onClick={removeNav}>
              <IoCloseSharp className="icon" />
            </div>
          </ul>
        </div>

        <div className="open-navbar" onClick={showNav}>
          <BiDotsVerticalRounded className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
