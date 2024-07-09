import React, { Fragment } from 'react'
import Sidebar from '../Dashboard/Sidebar';
import './UpdatePassword.css';

const UpdatePassword = () => {
  return (
    <Fragment>
    <div className="maindashboard">
        <div>
            <Sidebar />
        </div>
        <div>
           <div className='miniProfileContainer'>
           <div className='myProfile'>
                <h1>Settings</h1>
            </div>
            <div className='myProfileBtn'>
            </div>
           </div>
           <div className="updatePasswordContainer">
      <div className="updatePasswordForm">
        <h1 className="title">Change Password</h1>
        <form>
         
          <label>
            <input type="password" placeholder="Please Enter Your Old Password" className="input" />
          </label>
          <label>
            <input type="password" placeholder="Please Enter Your New Password" className="input" />
          </label>
          <label>
            <input type="password" placeholder="Please Enter Your Confirm Password" className="input" />
          </label>
          <button type="submit" className="buttonBtn">Change Password
          </button>
        </form>
      </div>
    </div>

        </div>
    </div>



</Fragment>
  )
}

export default UpdatePassword