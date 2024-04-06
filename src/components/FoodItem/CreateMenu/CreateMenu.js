import React from "react";

const CreateMenu = () => {
  // const refcls = useRef(null);

  const update = () => {
    // refcls.current.click();
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger mx-3"
        data-bs-toggle="modal"
        data-bs-target="#createMenu"
      >
        Create Your Menu
      </button>
      <div
        class="modal fade"
        id="createMenu"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create Your Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="itemHeading" class="form-label text-capitalize">
                  Item Heading
                </label>
                <input type="text" class="form-control" id="itemHeading" />
              </div>
              <div class="mb-3">
                <label for="itemname" class="form-label text-capitalize">
                  Item name
                </label>
                <input type="text" class="form-control" id="itemname" />
              </div>
              <div class="mb-3">
                <label for="itemprice" class="form-label text-capitalize">
                  Price($)
                </label>
                <input type="number" class="form-control" id="itemprice" />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={update}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;
