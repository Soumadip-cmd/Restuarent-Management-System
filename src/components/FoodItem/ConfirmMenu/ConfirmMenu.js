import React, { useRef } from "react";

const ConfirmMenu = () => {
  const refcls = useRef(null);

  const Confirm = () => {
    refcls.current.click();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning px-5 py-2 fs-5"
        style={{ fontWeight: "800" }}
        data-bs-toggle="modal"
        data-bs-target="#confirmMenu"
      >
        Confirm Menu
      </button>
      <div
        class="modal fade text-start"
        id="confirmMenu"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Your Menu Details
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <p className="p-3 text-danger">
              <b>
                Once you confirm menu you can't able to change the bill or you
                can't delete any item. So,please Check it Properly.
              </b>
            </p>
            <div class="modal-body">
              <table className="table table-striped2 table-hover">
                <thead style={{ color: "#06033e" }}>
                  <tr>
                    <th scope="col" className="fs-5" style={{ width: "50%" }}>
                      Item Name
                    </th>
                    <th scope="col" className="fs-5">
                      Price
                    </th>
                    <th scope="col" className="fs-5 text-center">
                      Qty.
                    </th>
                  </tr>
                </thead>
                <tbody>
            {/* item 1 */}
                  <tr>
                    <td
                      style={{
                        fontFamily: '"Macondo", cursive',
                        fontWeight: "800",
                      }}
                      className="fs-5"
                    >
                      Briyani-Fried Rice (Combo)
                    </td>
                    <td className="fs-6">$120</td>
                    <td className="text-center ">
                      4
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontFamily: '"Macondo", cursive',
                        fontWeight: "800",
                      }}
                      className="fs-5"
                    >
                      Briyani-Fried Rice (Combo)
                    </td>
                    <td className="fs-6">$120</td>
                    <td className="text-center ">
                      4
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontFamily: '"Macondo", cursive',
                        fontWeight: "800",
                      }}
                      className="fs-5"
                    >
                      Briyani-Fried Rice (Combo)
                    </td>
                    <td className="fs-6">$120</td>
                    <td className="text-center ">
                      4
                    </td>
                  </tr>
                </tbody>
              </table>
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
              <button type="button" class="btn btn-primary" onClick={Confirm}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmMenu;
