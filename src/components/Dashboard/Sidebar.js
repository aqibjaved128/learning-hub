import React, { Fragment } from 'react';
import logo from '../../images/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SchoolIcon from '@mui/icons-material/School';


const Sidebar = () => {
  return (
    <Fragment>
    <div className="sidebar">
        <Link to={"/dashboard"}>
            <img src={logo} alt="AJ Store" />
        </Link>
        <Link to={"/lessons"}>
            <p>
                <DashboardIcon/> Lessons
            </p>
        </Link>
        <Link to={"/admin/dashboard"}>
            <p>
        <SchoolIcon />

                Grade1
            </p>
        </Link>
       
    
       
        
        
        <Link to={"/my-profile"}>
            <p>
            <PersonIcon/> My Profile
            </p>
        </Link>

        <Link to={"/settings"}>
            <p>
                <SettingsIcon/> Settings
            </p>
        </Link>
        <Link to={"/sign-out"}>
            <p>
                <ExitToAppIcon/> Sign out
            </p>
        </Link>
        <Link to={"/help"}>
            <p>
                <HelpIcon/> Help
            </p>
        </Link>
      
       
    </div>
 </Fragment>
   )
}

export default Sidebar