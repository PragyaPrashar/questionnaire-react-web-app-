import React, {useState} from "react";
import "./index.css";
import {useSelector} from "react-redux";
const HighlightProfile = ()=>{


    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    // const[dateOfBirth, setDateOfBirth] =useState(currentLoggedInUser.dob)
    // const[address,setAddress]=useState(currentLoggedInUser.address)
    // const[email,setEmail]=useState(currentLoggedInUser._id)





    return(<>
            <div className="   rounded-top mt-3 ps-3 pe-3 pb-1 pt-2 wd-box bg-gradient ">
   <div className="row border-bottom ">
       <div className="col-10">
           <h6>Highlights</h6>
       </div>

   </div>
            <div className="row border-bottom bg-gradient wd-box">
                <div className="col-2"><i className="bi bi-balloon fs-4 text-secondary"></i></div>
                <div className="col-10 fs-10 p-1 " >{currentLoggedInUser.dob}</div>
            </div>
        <div className="row border-bottom">
            <div className="col-2"><i className="bi bi-geo-alt fs-4 text-secondary"></i></div>
            <div className="col-10 fs-10 p-1 " >{currentLoggedInUser.address}</div>
        </div>

            <div className="row border-bottom">
                <div className="col-2"><i className="bi bi-envelope fs-4 text-secondary"></i></div>
                <div className="col-10 fs-10 p-1 " >{currentLoggedInUser._id}</div>
            </div>
            <div className="row ">
                <div className="col-2"><i className="bi bi-calendar-check fs-4 text-secondary "></i></div>
                <div className="col-10 fs-10 p-1 ">Joined Feb 28, 1996</div>
            </div>
            </div>
        </>
    );
}
export default HighlightProfile;