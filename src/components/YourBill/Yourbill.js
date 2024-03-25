import React from 'react'
import './Yourbill.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Yourbill = () => {
  return (
    <div className='bill-body'>
      <div className="container text-center p-4">
        <h2><b>Bill Details</b></h2>
      </div>
      <div className="container card p-0" style={{ width: '44vw', background: 'none', position: 'relative' }}>
        <div className="d-flex justify-content-around" style={{ backgroundColor: 'rgb(255 165 0)' }}>
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none"
          >
            <img src="bill-logo-rahino.png" alt="bill-logo" className="logo-bg-style" />

            <span
              className="fs-3"
              style={{ fontFamily: "'Ojuju', sans-serif", margin: '-18px' }}
            >
              <span style={{ color: "black", fontWeight: "700" }}>R</span>
              <span style={{ color: "black", fontWeight: "600" }}>a</span>
              <span style={{ color: "black", fontWeight: "700" }}>H</span>
              <span style={{ color: "black", fontWeight: "600" }}>I</span>
              <span style={{ color: "black", fontWeight: "600" }}>No</span>
            </span>
          </Link>
          <img src='premium1.png' className='img-premium-pos' alt='logo' />
          <img src='img-logo.avif' className='img-pos mt-2' alt='logo' />
        </div>
        <div style={{backgroundColor:'white',position:'relative',zIndex:'2'}}>
          <div className="container d-flex justify-content-between" >
            {/* here fill meneger name using js */}
            <div className='mt-4'><h5 style={{ textTransform: 'uppercase', fontWeight: '800' }}>invoice to: <span className='mx-1'>Manager Name</span></h5>
              {/* fill restuaren address using js */}
              <div className="float-end" style={{ fontSize: '19px' }}>Restuarent Address<br />
                <div className="float-end" style={{ fontSize: '19px' }}>City/State/Country</div></div>
            </div>
            <div className='mt-5'>
              {/* here fill a code number for that bench */}
              <h5>INVOICE # 00020AB</h5>
              {/* fill current date */}
              <p>DATE: 13/10/2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yourbill
