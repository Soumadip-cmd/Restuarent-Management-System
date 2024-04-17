import React, { useRef } from 'react'

const DeleteMenuitem = (props) => {
    const {modalTitle2}=props
    const refcls=useRef(null)

    const submit=()=>{
        refcls.current.click()
    }
    return (
        <>
            <button
                className="btn btn-danger mx-2 py-1 px-3"
                style={{ borderRadius: "20px" }}
                type="button"
                data-bs-toggle="modal"
        data-bs-target="#deletemenuItem"
            >
                Delete
            </button>
            <div
        class="modal fade text-start"
        id="deletemenuItem"
        tabindex="-1"
        aria-labelledby="itemdelete"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog2 modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="itemdelete">
                {modalTitle2}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-capitalize">You Sure Want to delete?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refcls}
              >
                No
              </button>
              <button type="button" class="btn btn-primary" onClick={submit}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default DeleteMenuitem
