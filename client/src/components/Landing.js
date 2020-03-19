import React from 'react';
import UploadForm from "./UploadForm";

import mainImage from "../mainpage.svg"
const Landing = (props) => {
  return (
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-6 landing_container_left">
            <UploadForm />
        </div>
        <div className="col-md-6 landing_container_right">
            <h1 className="main_heading">Store and share your data.</h1>
            <center><img src={mainImage}></img></center>
        </div>

        </div>
      </div>
  )
} 
export default Landing