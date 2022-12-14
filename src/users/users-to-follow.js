import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {followUserThunk} from "../questionnaire/followersfollowing/following-followers-thunk";

const UsersToFollow=(
    userItem
)=>{
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    const dispatch=useDispatch();
    const setFollowHandler=()=>{
        const followUserId=userItem.userItem._id
        console.log("followUserId is ",followUserId)
        const obj = {
            loggedInUserId: currentLoggedInUser._id,
            anotherUserId : followUserId
        }
        dispatch(followUserThunk(obj))
    }


    console.log("userItem is ",userItem)
    return(

        <>
            <div className="row bg-gradient p-2 border-bottom shadow-sm ">
                <div className="col-2"><img alt="" src="../../../images/profile-pic-f.jpg"
                                            className=" wd-profile-pic-f rounded-circle shadow "/>
                </div>
                <div className="col-7">
                    <div className="pt-1">
                        <span className="fw-bold text-dark">{userItem.userItem.username}</span>
                        {/*<p className="text-secondary">20 followers</p>*/}
                    </div>
                </div>
                <div className="col-3 ">

                    <button className="w-50 wd-btn bg-dark text-light border-0 shadow rounded-pill  mt-3 " onClick={setFollowHandler}>Follow</button>

                </div>

            </div>

        </>

    )

}
export default UsersToFollow;