import React, { Fragment } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';


const Dashboard = () => {

  return (
    <Fragment>
        <div className="maindashboard">
            <div>
                <Sidebar />
            </div>
            <div>
              <div>
                <h1>STEAM Dashboard</h1>
                <p>Welcome, Teacher’s Name!</p>
              </div>
              
            </div>
        </div>
    </Fragment>
  )
}

export default Dashboard