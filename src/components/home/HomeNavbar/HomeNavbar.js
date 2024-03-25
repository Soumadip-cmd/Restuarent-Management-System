import React from "react";
import './HomeNavbar.css'
import { Link } from "react-router-dom";
const HomeNavbar = () => {
  return (
    <>
      <div className="mx-4">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none"
          >
            <img src="chef.png" alt="restaurant logo"/>
            
            <span
              className="fs-1"
              style={{ fontFamily: "'Ojuju', sans-serif" }}
            >
              <span style={{ color: "aqua", fontWeight: "700" }}>R</span>
              <span style={{ color: "#cfd9e4", fontWeight: "500" }}>a</span>
              <span style={{ color: "aqua", fontWeight: "700" }}>H</span>
              <span style={{ color: "#cfd9e4", fontWeight: "500" }}>I</span>
              <span style={{ color: "#cfd9e4", fontWeight: "500" }}>No</span>
            </span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item ">
              <Link
                to="/"
                className="nav-link  mx-1 active"
                aria-current="page"
                style={{ color: "white", fontSize: "21px" }}
              >
                Home
                <div className="line"></div>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/fooditem"
                className="nav-link  mx-1"
                style={{ color: "white", fontSize: "21px" }}
              >
                <span style={{fontFamily:"'Macondo', cursive"}}>Food-Item</span>
                <div className="line"></div>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/yourbill"
                className="nav-link  mx-1"
                style={{ color: "white", fontSize: "21px" }}
              >
                <span style={{fontFamily:"'Macondo', cursive"}}>Your-Bill</span>
                <div className="line"></div>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/"
                className="nav-link  mx-1"
                style={{ color: "white", fontSize: "21px" }}
              >
                Features
                <div className="line"></div>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/"
                className="nav-link  mx-1"
                style={{ color: "white", fontSize: "21px" }}
              >
                FAQs
                <div className="line"></div>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/"
                className="nav-link  mx-1"
                style={{ color: "white", fontSize: "21px" }}
              >
                About
                <div className="line"></div>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default HomeNavbar;
