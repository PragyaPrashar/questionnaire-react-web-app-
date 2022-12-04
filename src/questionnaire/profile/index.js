import React from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import QuestionsAnswers from "../questionsanswers";

const Profile =()=>{
    return(
<>
<div className="row mt-3">
    <div className="col-2">
        <img alt="" src="../../../images/profile-pic.jpg" className=" wd-profile-pic rounded-circle shadow "/>
    </div>
    <div className="col-7">
        <span className="fw-bold display-6">Pragya Prashar</span>
        <div className="text-secondary mt-2">
        <span className="text-secondary">85 followers</span> &#x2022; <span className="text-secondary">50 following</span>
           <div className="mt-2">
            <span className="text-secondary">“Not all those who wander are lost.”</span>
           </div>
        </div>
    </div>
    <div className="col-3">
        <Link to="/edit-profile"><button className="rounded-pill float-end wd-edit border-0 w-75 text-light"> Edit Profile</button></Link>
    </div>
</div>

    <div className="row  pb-1 mt-5 border-bottom">
        <div className="col-3">
           <Link className="text-decoration-none text-secondary p-2  bg-gradient" to={"/profile/"}><span className="wd-onHover">Questions</span></Link>
        </div>
        <div className="col-3">
            <Link className="text-decoration-none text-secondary p-2" to={"/profile/"}><span className="wd-onHover">Answers</span></Link>
        </div>
        <div className="col-3">
            <Link className="text-decoration-none text-secondary p-2" to="/profile/followersfollowing/"><span className="wd-onHover">Followers</span></Link>
        </div>
        <div className="col-3">
            <Link className="text-decoration-none text-secondary p-2" to="/profile/followersfollowing/"><span className="wd-onHover">Following</span></Link>
        </div>
    </div>
    {/*<div className="row">*/}
    {/*    <div className="col-12">*/}
    {/*    Changing Section*/}


    {/*    </div>*/}
    {/*</div>*/}





</>
    );
}
export default Profile;