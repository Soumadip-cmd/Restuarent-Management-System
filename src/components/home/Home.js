import React from "react";
import "./Home.css";
import HomeNavbar from "./HomeNavbar/HomeNavbar";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const Home = () => {
  
  return (
    <div className="home-Body">
      <HomeNavbar />
      <div className="animated">
        <div
          className="container d-flex justify-content-center align-items-center "
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.3451em",
            height: "200px",
            fontSize:'25px',
          }}
        >
          Welcome to
        </div>
        <div
          className={`container d-flex justify-content-center align-items-center fontS1 animated-special`}
          style={{
            marginTop: "-60px",
            fontFamily: ' "Lora", serif',
            letterSpacing: ".1em",
          }}
        >
          The RaHino
        </div>
        <div
          className="container d-flex justify-content-center align-items-center fontS2"
          style={{ fontFamily: '"Macondo", cursive' }}
        >
          Restuarant & Management System
        </div>
      </div>
      <div class="d-grid gap-3 d-md-flex justify-content-center my-4 btnH">
        <Login />
        <Signup />
      </div>
    </div>
  );
};

export default Home;
