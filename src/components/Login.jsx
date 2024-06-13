import React, { useState } from 'react'

const Login = () => {
const [data,setData]=useState(
    {
         "email":"",
         "password":""

    }
)
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
}
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="g-3">
                    <div className=" col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler} />

                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={data.password}onChange={inputHandler} />
<br />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValue}>Login</button>
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <a href="">Signup</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
