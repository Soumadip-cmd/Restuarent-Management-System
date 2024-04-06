import React, { useRef } from "react";

const EditMenu = () => {
  let svgIcon = {
    display: "block",
    width: "100%",
    height: "auto",
    cursor: "pointer",
  };
  const refcls=useRef(null)

  const update=()=>{
      refcls.current.click()
  }
  

  return (
    <>
      <div title="Edit Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-pencil-square img-fluid text-primary"
          viewBox="0 0 16 16"
          style={svgIcon}
          data-bs-toggle="modal"
          data-bs-target="#EditMenu"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
        <div
          class="modal fade"
          id="EditMenu"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Menu
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {/* here is body */}
              <div class="modal-body">
              ...
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refcls}
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary" onClick={update}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMenu;
