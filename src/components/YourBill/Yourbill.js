import React from "react";
import "./Yourbill.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import RatingStar from "./RatingStar";
import QRcode from "./QRcode";
import Print from "./Print";
import BillNavbar from "./BillNavbar";

const Yourbill = () => {
  return (
    <div className="bill-body pb-5">
      <BillNavbar />
      <div className=" text-center py-4 print-content">
        <h2>
          <b>Bill Details</b>
        </h2>
      </div>
      <div className="">
        <div
          className={` container card p-0 responsive-card print-image`}
          style={{ background: "none", position: "relative" }}
        >
          <div
            className="d-flex justify-content-between "
            style={{ backgroundColor: "rgb(255 165 0)" }}
          >
            <Link
              to="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none"
            >
              <img
                src="bill-logo-rahino.png"
                alt="bill-logo"
                className="logo-bg-style"
              />

              <span
                className="fs-3"
                style={{ fontFamily: "'Ojuju', sans-serif", margin: "-18px" }}
              >
                <span style={{ color: "black", fontWeight: "700" }}>R</span>
                <span style={{ color: "black", fontWeight: "600" }}>a</span>
                <span style={{ color: "black", fontWeight: "700" }}>H</span>
                <span style={{ color: "black", fontWeight: "600" }}>I</span>
                <span style={{ color: "black", fontWeight: "600" }}>No</span>
              </span>
            </Link>
            <img src="premium1.png" className="img-premium-pos" alt="logo" />
            <img src="img-logo.avif" className="img-pos mt-2" alt="logo" />
          </div>
          <div
            style={{
              backgroundColor: "white",
              zIndex: "2",
            }}
          >
            <div className="container d-flex justify-content-between">
              {/* here fill meneger name using js */}
              <div className="mt-4">
                <h5 style={{ textTransform: "uppercase", fontWeight: "800" }}>
                  invoice to: <span className="mx-1">Manager Name</span>
                </h5>
                {/* fill restuaren address using js */}
                <div className="float-end" style={{ fontSize: "19px" }}>
                  Restuarent Address
                  <br />
                  <div className="float-end" style={{ fontSize: "19px" }}>
                    City/State/Country
                  </div>
                </div>
              </div>
              <div className="mt-5">
                {/* here fill a code number for that bench */}
                <h5>
                  INVOICE # <b>00020AB</b>
                </h5>
                {/* fill current date */}
                <p>
                  DATE: <b>13/10/2024</b>
                </p>
              </div>
            </div>
            <div className="container px-4 py-3">
              <table className="table table-striped table-hover">
                <thead
                  className="text-center"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                >
                  <tr>
                    <th style={{ width: "6vw" }} className=" text-start px-3">
                      SL
                    </th>
                    <th className=" text-start">Item Description</th>
                    <th>Price</th>
                    <th>Qty.</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className=" text-start px-3">
                      <b>1</b>
                    </td>
                    <td className="text-start px-3">Chicken Tikka Masala</td>
                    <td>$15</td>
                    <td>1</td>
                    <td>
                      <b>$15</b>
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-start px-3">
                      <b>1</b>
                    </td>
                    <td className="text-start px-3">Chicken Tikka Masala</td>
                    <td>$15</td>
                    <td>1</td>
                    <td>
                      <b>$15</b>
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-start px-3">
                      <b>1</b>
                    </td>
                    <td className="text-start px-3">Chicken Tikka Masala</td>
                    <td>$15</td>
                    <td>1</td>
                    <td>
                      <b>$15</b>
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-start px-3">
                      <b>1</b>
                    </td>
                    <td className="text-start px-3">Chicken Tikka Masala</td>
                    <td>$15</td>
                    <td>1</td>
                    <td>
                      <b>$15</b>
                    </td>
                  </tr>
                  <tr style={{ height: "35px" }}>
                    <td className=" text-start px-3">
                      <b> </b>
                    </td>
                    <td className="text-start px-3"> </td>
                    <td> </td>
                    <td> </td>
                    <td>
                      <b> </b>
                    </td>
                  </tr>
                  <tr style={{ height: "35px" }}>
                    <td className=" text-start px-3">
                      <b> </b>
                    </td>
                    <td className="text-start px-3"> </td>
                    <td> </td>
                    <td> </td>
                    <td>
                      <b> </b>
                    </td>
                  </tr>
                  <tr style={{ height: "35px" }}>
                    <td className=" text-start px-3">
                      <b> </b>
                    </td>
                    <td className="text-start px-3"> </td>
                    <td> </td>
                    <td> </td>
                    <td>
                      <b> </b>
                    </td>
                  </tr>
                  {/* Repeat this row for additional items */}
                </tbody>
              </table>
            </div>
            <div className="container">
              <div className="d-flex justify-content-between">
                <section className="mx-4 ">
                  <i>Thank You for shopping in our store!</i>
                  <div className="container">
                    <RatingStar />
                  </div>
                </section>
                <section>
                  {/* caculate total bill here */}

                  <div className="d-flex justify-content-between mx-3">
                    <div>
                      <p>
                        <b>SUBTOTAL</b>
                      </p>
                      <span className="float-end my-0 side-pos">TAX</span>
                      <br />
                    </div>
                    <div>
                      <p className=" mx-3">
                        <b>$120</b>
                      </p>
                      <p className="float-start mx-3 side-pos">$10</p>
                      <br />
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-end side-pos special p-1 mx-3"
                    style={{ fontWeight: "800" }}
                  >
                    <div>
                      <p>TOTAL</p>
                    </div>
                    <div>
                      <p className="mx-3">$130</p>
                    </div>
                  </div>
                </section>
              </div>
              {/* write restuarent publish year at 2024+ add restuarent's name */}
            </div>
            <div className="container mx-4 " style={{ width: "50%" }}>
              Copyright © 2024{" "}
              <b style={{ fontSize: "18px" }}>[Restuarent's Name]</b>. All rights
              reserved. Unauthorized reproduction prohibited.
            </div>

            <div className="container d-flex justify-content-between">
              <div className=" m-4" style={{ width: "53%" }}>
                <p
                  className="mb-1"
                  style={{ fontWeight: "800", fontFamily: '"Macondo", cursive' }}
                >
                  Terms & Condition
                </p>
                <p>
                  Access and use of this restaurant management system imply
                  adherence to outlined terms, including restrictions and privacy
                  policies.
                </p>
              </div>
              <div className="m-4">
                <hr style={{ width: "200px" }} />
                <p className="text-center" style={{ fontSize: "10px" }}>
                  Authorized Signature
                </p>
              </div>
            </div>
          </div>
          <div className="container px-5" style={{ backgroundColor: "rgb(255 165 0)" }}>
            <footer
              className="d-flex flex-wrap justify-content-between align-items-center py-3 "

            >
              {/* qr code generate link as 'urlLink'*/}
              <p className="col-md-4 mb-0">
                <QRcode urlLink="https://www.youtube.com/" />
              </p>
              <Link
                to="/"
                className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
              >
                <b>WWW.RAHINO.COM</b>
              </Link>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
                <li className="ms-3">
                  <Link className="text-muted" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="text-muted" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="text-muted" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" className="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
      <Print />
    </div>
  );
};

export default Yourbill;


// remmeber one things--->
// here i want to create the bill by owner of restuarent so who signup as "staff" only for them visible a button to "create your official bill"..
// otherwise for 'diners ' not!!!