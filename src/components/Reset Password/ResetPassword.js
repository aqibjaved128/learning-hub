import React, { Fragment } from 'react';
import './ResetPassword.css';
import Logo from '../../images/logo.png';



const ResetPassword = () => {
  return (
    <Fragment>
     <div className="containerLogihUser">
           
           <section>
            <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
         
           <div class="signin"> 
         
            <div class="content"> 
         
              <img src={Logo} alt="" />
             <h2>STEAM CURRICULUM  </h2> 
             <h2>Reset Password</h2> 
         
             <div class="form"> 
         
              <div class="inputBox"> 
         
               <input type="password" required /> <i>New Password</i> 
         
              </div> 
         
              <div class="inputBox"> 
         
              <input type="password" required /> <i>Confirm Password</i> 
         
              </div> 
         
         
         
              <div class="inputBox"> 
         
               <input type="submit" value="Reset Password" /> 
         
              </div> 
         
             </div> 
         
            </div> 
         
           </div> 
         
          </section></div> 
    </Fragment>
  )
}

export default ResetPassword