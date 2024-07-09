import React, { Fragment } from 'react';
import {ReactNavbar} from "overlay-navbar";
import {FaUserAlt} from 'react-icons/fa'
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    const options = {
        navColor1:"yellow",
        navColor2:"hsl(219, 48%, 8%)",
        burgerColor:"#1a2a4b",
        burgerColorHover:"hsl(250, 100%, 75%)",
        logo,
        logoHoverColor:"hsl(250, 100%, 75%)",
        logoWidth:"140px",
        nav2justifyContent:"space-around",
        nav3justifyContent:"space-around",
        link1Text:"Home",
        link2Text:"About",
        link3Text:"Projects",
        link4Text:"Contact",
        link1Url:"/",
        link2Url:"/about",
        link3Url:"/projects",
        link4Url:"/contact",
        link1Color:"HSL(250, 100%, 75%)",
        link1ColorHover:"white",
        link1Size:"1.5rem",
        link1Padding:"3vmax",
        profileIcon:	true,
        ProfileIconElement	: FaUserAlt,
        profileIconColor:"HSL(250, 100%, 75%)",
        profileIconColorHover:"white"
    }
  return (
    <Fragment>
       <ReactNavbar {...options} />
    </Fragment>
  )
}

export default Header