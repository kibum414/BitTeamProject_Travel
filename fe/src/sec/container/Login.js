import React, { useState } from 'react'
import '../component/Login.css';

const Login = () => {
  return (
    <form style={{ border: "1px solid #ccc" }}>
      <div className="container">
        <h1>Login</h1>
        <hr />
        
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
        
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required />
        
        <label>
          <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: "15px" }} /> Remember me
        </label>
      </div>
      
    
      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="button" className="loginbtn">Login</button>
        <span className="psw"><a href="#" style={{ color: 'dodgerblue' }}>Forget Password ?</a></span>
      </div>
    </form>
  )
}
  
export default Login