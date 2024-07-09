import React, { Fragment } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Login = () => {
  return (
    <Fragment>
    <div className="containerLogihUser">
           
  <section>
   <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

  <div class="signin"> 

   <div class="content"> 

     <img src={Logo} alt="" />
    <h2>STEAM CURRICULUM  </h2> 
    <h2>Sign In</h2> 

    <div class="form"> 

     <div class="inputBox"> 

      <input type="text" required /> <i>Username</i> 

     </div> 

     <div class="inputBox"> 

      <input type="password" required /> <i>Password</i> 

     </div> 

     <div class="links"> <Link to={`/password/forgot`}>Forgot Password</Link> <Link to={`/sign-up`}>Signup</Link> 

     </div> 

     <div class="inputBox"> 

      <input type="submit" value="Login" /> 

     </div> 

    </div> 

   </div> 

  </div> 

 </section></div> 
    </Fragment>
    )
}

export default Login