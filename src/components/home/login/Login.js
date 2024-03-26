import React, { useRef } from 'react'
import './Login.css'


const Login = () => {
  let refCls=useRef(null)
  const loginBtn =()=>{
    refCls.current.click()
  }
  return (
    <>
      <button className="btn btn-outline-light me-md-2 px-5 py-2 fs-5" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropLogin" style={{borderRadius:'100px'}}>
        Login
      </button>
      <div className="modal fade btn-body" id="staticBackdropLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="staticBackdropLabel">Portal Login</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={refCls}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='name@email.com'/>
                 
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>


              </form>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <div className="form-check fs-6">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
              </div>
              <button type="button" className="btn btn-primary px-4" onClick={loginBtn}>Login</button>
            </div>
              <span className='d-flex justify-content-center'>Don't have an Account?→<span data-bs-toggle="modal" data-bs-target="#staticBackdropSignUp" style={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>SignUp Here</span></span><br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
