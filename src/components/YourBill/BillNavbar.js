import React, { useRef } from "react";
import './Billnavbar.css'
const BillNavbar = () => {
  const refClose=useRef(null)
  const handleClick=()=>{
    refClose.current.click()
  }
  return (
    <>
      {/* Want To Create your Bill?--→ */}
      <div className=" bg-light">
        <header className="d-flex justify-content-center py-2 align-items-center  ">
          <section className="nav nav-pills mx-3 font-styl">
            Want To Create your Bill?→
            <button type="button" class="btn btn-success mx-3" data-bs-toggle="modal" data-bs-target="#exampleModalcreateBill">
              Create Your Bill
            </button>

            <div class="modal fade" id="exampleModalcreateBill" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Bill-Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
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
