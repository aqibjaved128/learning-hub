import React, { Fragment } from 'react'
import loader from '../../images/loader.gif';
import './Loader.css';


const Loader = () => {
  return (
<Fragment>
<div className="loader">
      <img src={loader} alt="Page not found" className="loader-image" />
      <h1>Loading...</h1>
      <p>Please wait a bit, it might take a while</p>
    </div>
</Fragment>
  )
}

export default Loader