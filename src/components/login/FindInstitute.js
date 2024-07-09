import React, { Fragment } from 'react';
import logo from '../../images/logo.png';
import './FindInstitute.css';
import { Link } from 'react-router-dom';

const FindInstitute = () => {
    let institutes = [
        "Bahria University" , "Virtual University" , "Fast University" , "Nust University" , "Iqra University"
    ];
  return (
    <Fragment>
        <div className="container">
            <h1>STEAM Curriculum</h1>
             <img src={logo} alt="logo" />
            <h2>Find your institute</h2> 
            <div>
                <select name="institute"  >
                    <option value="">--Please Select Your Institute--</option>
                    {
                        institutes && institutes.map((institute)=>(
                            <option value="" key={institute}>{institute}</option>
                        ))
                    }
                </select>
            </div>
            <Link to={`/login`}>Next</Link>
        </div>
    </Fragment>
  )
}

export default FindInstitute