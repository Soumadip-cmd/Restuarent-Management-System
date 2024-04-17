import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PrevNext = () => {
  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-dark">
                &#11164;
              </button>
              <button type="button" className="btn btn-outline-dark active">
                1
              </button>
              <button type="button" className="btn btn-outline-dark">
                &#11166;
              </button>
            </div>
      {/* <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className=" page-link  btn btn-outline-dark" to="/" role="button">
              &#11164;
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link btn btn-outline-dark " to="/">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className=" page-link  btn btn-outline-dark" to="/" role="button">
              &#11166;
            </Link>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default PrevNext;

// page navigation is used to take action in prev next button
