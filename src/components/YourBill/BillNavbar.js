import React, { useRef } from "react";
import "./Billnavbar.css";
import { Link } from "react-router-dom";
const BillNavbar = () => {
  const refClose = useRef(null);
  const handleClick = () => {
    refClose.current.click();
  };
  return (
    <>
      <div className=" bg-dark hidden-on-print">
      <header className="d-flex justify-content-between py-2 align-items-center " style={{position:'relative'}}>
      <div className="px-4 ">
      <Link
            to="/"
            className="home-btn-pos" title='Home'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="white" className="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
          </Link>
      </div>
     
          <section className="nav nav-pills mx-3  ">
            
            <button type="button" className="btn btn-danger mx-3" data-bs-toggle="modal" data-bs-target="#exampleModalcreateBill" >
              Create Your Bill
            </button>
            <div className="">
              <Link className="btn btn-success" to="/fooditem" role="button">View Menu</Link>
            </div>
            <div className="modal fade" id="exampleModalcreateBill" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Bill-Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="ManagerName" className="form-label">Manager Name<span style={{ color: 'red' }} className="mx-1">*</span></label>
                      <input type="text" className="form-control" id="ManagerName" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="RestuarentAddress" className="form-label">Restuarent Address<span style={{ color: 'red' }} className="mx-1">*</span></label>
                      <input type="text" className="form-control" id="RestuarentAddress" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="RestuarentName" className="form-label">Restuarent Name<span style={{ color: 'red' }} className="mx-1">*</span></label>
                      <input type="text" className="form-control" id="RestuarentName" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="sign" className="form-label">Authorized Sign(as png)<span style={{ color: 'red' }} className="mx-1">*</span></label>
                      <input type="file" accept="image/png" className="form-control" id="sign" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="restuarentUrl" className="form-label">Restuarent Website URL:</label>
                      <input type="text" className="form-control" id="restuarentUrl" placeholder="www.example.com OR https://example/" />
                    </div>


                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    </>
  );
};

export default BillNavbar;
