import React from "react";
import './FoodNavbar.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CreateMenu from "./CreateMenu/CreateMenu";

const FoodItemNavbar = () => {
  return (
    <div className="pb-5">
      <div className=" bg-dark hidden-on-print">

        <header
          className="d-flex flex-wrap justify-content-between align-items-center py-3 "
        >
          <Link
            to="/"
            className="col-md-4 mb-0 px-4" title='Home'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="white" className="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
          </Link>
          <span

            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <CreateMenu/>
            
              <span className="btn btn-success" to="" role="button" data-bs-toggle="modal"
          data-bs-target="#EditMenu">Edit Your Menu</span>
            
          </span>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
            <li className="ms-3">
              <Link className="btn btn-primary mx-3" to="/yourbill" role="button" style={{ borderRadius: '20px' }}>See Your Bill</Link>
            </li>
          </ul>
        </header>
        

      </div>
    </div>
  );
};

export default FoodItemNavbar;
