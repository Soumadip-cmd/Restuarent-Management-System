import React,{useRef} from "react";

const AddMenuitem = (props) => {
  const { modalTitle1 } = props;
  const refcls=useRef(null)

    const submit=()=>{
        refcls.current.click()
    }
  return (
    <>
      <button
        className="btn btn-success mx-2 py-1 px-3"
        style={{ borderRadius: "20px" }}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#addmenuItem"
      >
        Add
      </button>

      <div
        class="modal fade text-start"
        id="addmenuItem"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog2 modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {modalTitle1}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* adding imput TAG */}
              <div class="mb-3">
                <label for="itemnumber" class="form-label text-capitalize">
                  Total Number Quantity you want to add
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="itemnumber"
                  
                />
              </div>
             
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
              <button type="button" class="btn btn-primary" onClick={submit}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMenuitem;
