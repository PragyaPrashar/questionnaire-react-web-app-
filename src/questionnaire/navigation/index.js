import React from "react";
import "./index.css"
import {Link} from "react-router-dom";
const Navigation=()=>{
    return(
        <>

        <div className="row  border-bottom shadow-lg wd-background bg-gradient p-1">
            <div className="col-2">
                <Link to="/"><img alt="" src="../../../images/questionnaire_logo.png" className="wd-logo "/></Link>
            </div>
            <div className="col-1 ">
                <Link to="/"><i className="bi bi-house-door fs-4 text-light wd-pos "></i></Link>
            </div>
            <div className="col-1 ">
              <Link to="/questions">  <i className="bi bi-question-square fs-4 text-light wd-pos"></i></Link>
            </div>
            <div className="col-1 ">
                <i className="bi  bi-pencil-square fs-4 text-light wd-pos"></i>
            </div>
            <div className="col-4">
                <div className="position-absolute mt-1">
                 <input className="ps-5 pb-1 w-100 rounded-pill pb-0 border-1 wd-search-border wd-pos shadow-lg" type="text" placeholder="search"/><i
                className="bi bi-search wd-search text-secondary"></i>
                </div>
            </div>
            <div className="col-1">
                <Link to="/profile/"><img alt="" src="../../../images/profile-pic.jpg" className="wd-profile rounded-circle mt-1 shadow"/></Link>
            </div>
            <div className="col-2">
                <h6 className="text-light wd-logout">Logout</h6>
            </div>
        </div>

        </>
    );
}
export default Navigation;