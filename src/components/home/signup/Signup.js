import React, { useRef } from 'react'
import './Signup.css'


const Signup = () => {
  let refClose = useRef(null)
  const signupBtn = () => {
    refClose.current.click()
  }
  return (
    <>
      <button className="btn btn-outline-danger btn-special me-md-2 px-5 py-2 fs-5" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropSignUp" style={{borderRadius:'100px'}}>
        Sign-Up
      </button>
      <div className="modal fade btn-body" id="staticBackdropSignUp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="staticBackdropLabel">Sign Up</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={refClose}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="name" placeholder="William Smith" />
                  <label htmlFor="name">User Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="confirmpass" placeholder="Confirm Password" />
                  <label htmlFor="confirmpass">Confirm Password</label>
                </div>
                <div className=" mb-3">
                  <select className='form-control'>
                  {/* \\n */}
                    <option disabled selected value={'--Choose Your Field--'}>--Choose Your Field--</option>
                    <option>Professional Staff</option>
                    <option>Diners</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center flex-column">
                <span>Already a member?→<span data-bs-toggle="modal" data-bs-target="#staticBackdropLogin" style={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Login Here</span></span><br/>
              <button type="button" className="btn btn-primary px-4" onClick={signupBtn}>Sign-Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
