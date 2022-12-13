import React from "react";
import {useSelector} from "react-redux";

const FollowerComponent = ()=>{
    return(

            <div className="row mt-2 border-bottom shadow-sm ">
                <div className="col-2"><img alt="" src="../../../images/profile-pic-f.jpg"
                                            className=" wd-profile-pic-f rounded-circle shadow mt-2"/>
                </div>
                <div className="col-7">
                    <div className="pt-1">
                        <span className="fw-bold">Amit Satish Kulkarni</span>
                        <p className="text-secondary">20 followers</p>
                    </div>
                </div>
                <div className="col-3 ">

                    <button className="w-50 wd-bttn text-light border-0 shadow rounded-pill bg-gradient mt-3 ">Follow</button>

                </div>

            </div>

    )
}
export default  FollowerComponent;