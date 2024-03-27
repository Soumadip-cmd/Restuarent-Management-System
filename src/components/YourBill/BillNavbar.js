import React, { useRef } from "react";
import './Billnavbar.css'
import { Link } from "react-router-dom";
const BillNavbar = () => {
  const refClose = useRef(null)
  const handleClick = () => {
    refClose.current.click()
  }
  return (
    <>

      <div className=" bg-dark hidden-on-print" >
        <header className="d-flex justify-content-center py-2 align-items-center ">
          <section className="nav nav-pills mx-3  ">
            <span className="text-white-50 font-styl">Want To Create your Bill?→</span>
            <button type="button" class="btn btn-danger mx-3" data-bs-toggle="modal" data-bs-target="#exampleModalcreateBill" >
              Create Your Bill
            </button>
            <div className="">
              <Link class="btn btn-success" to="/fooditem" role="button">View Menu</Link>
            </div>
            <div class="modal fade" id="exampleModalcreateBill" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Bill-Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div class="mb-3">
                      <label for="ManagerName" class="form-label">Manager Name<span style={{ color: 'red' }} className="mx-1">*</span></label>
                      <input type="text" class="form-control" id="ManagerName" />
                    </div>
                    <div class="mb-3">
                      <label for="RestuarentAddress" class="form-label">Restuarent Address<span style={{ color: 'red' }} className="mx-1">*</span></label>
                      <input type="text" class="form-control" id="RestuarentAddress" />
                    </div>
                    <div class="mb-3">
                      <label for="RestuarentName" class="form-label">Restuarent Name<span style={{ color: 'red' }} className="mx-1">*</span></label>
                      <input type="text" class="form-control" id="RestuarentName" />
                    </div>
                    <div class="mb-3">
                      <label for="sign" class="form-label">authorized sign(as png)<span style={{ color: 'red' }} className="mx-1">*</span></label>
                      <input type="file" accept="image/png" class="form-control" id="sign" />
                    </div>
                    <div class="mb-3">
                      <label for="restuarentUrl" class="form-label">Restuarent Website URL:</label>
                      <input type="text" class="form-control" id="restuarentUrl" placeholder="www.example.com OR https://example/" />
                    </div>


                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                    <button type="button" class="btn btn-primary" onClick={handleClick}>Submit</button>
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
