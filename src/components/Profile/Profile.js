import React, { Fragment } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import './Profile.css';

const Profile = () => {
    let gander = [
        "Male","Female","Other"
    ];
  return (
    <Fragment>
        <div className="maindashboard">
            <div>
                <Sidebar />
            </div>
            <div>
               <div className='miniProfileContainer'>
               <div className='myProfile'>
                    <h1>My Profile</h1>
                    <h4>Personal Information</h4>
                </div>
                <div className='myProfileBtn'>
                </div>
               </div>
  <div className='secondProfileContainer'>
    <div className="myProfileFormContainer">
      <div className="myProfileFormMini">
        <form>
          <label>
            <input type="text" placeholder=" First Name" className="input" />
          </label>
          <label>
            <input type="text" placeholder="Last Name" className="input" />
          </label>
          <label>
          <div className='gender'>
                <select name="institute"  >
                    <option value="">--Your Gender--</option>
                    {
                        gander && gander.map((institute)=>(
                            <option value="" key={institute}>{institute}</option>
                        ))
                    }
                </select>
            </div>
          </label>
          <label>
            <input type="text" placeholder="Date of Birth" className="input" />
          </label>
          <label>
            <input type="text" placeholder="Contact Number" className="input" />
          </label>
          <label>
            <input type="text" placeholder="City" className="input" />
          </label>
          <label>
            <input type="text" placeholder="Country" className="input" />
          </label>
          <label>
            <input type="text" placeholder="Degree" className="input" />
          </label>
          <label>
            <input type="text" placeholder="Specialisation" className="input" />
          </label>
          <button type="submit" className="buttonBtn">Submit</button>
        </form>
      </div>
    </div>
    <div className="form-container">
      <div className="profile-picture">
        <div className="profile-icon"></div>
        <div className="note">Note: JPG file of Max. 150KB is required for Profile Picture</div>
      </div>
      <div className="form-group">
        <label htmlFor="institute">Institute:</label>
        <input type="text" id="institute" name="institute" placeholder="Abc International" />
      </div>
      <div className="form-group">
        <label htmlFor="subjects">Subjects:</label>
        <input type="text" id="subjects" name="subjects" placeholder="-------------------" />
      </div>
    </div>

  </div>
 
            </div>
        </div>



    </Fragment>
  )
}

export default Profile