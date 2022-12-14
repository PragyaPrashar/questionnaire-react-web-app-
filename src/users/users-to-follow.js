import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    followUserThunk,
    unfollowUserThunk
} from "../questionnaire/followersfollowing/following-followers-thunk";
import "./index.css";

const UsersToFollow=(
    userItem
)=>{
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    const dispatch=useDispatch();
    // let [toggle,setToggle]=useState(false);
    let value=currentLoggedInUser.following.includes(userItem.userItem._id)
    const setFollowHandler=()=>{
        // setToggle(toggle=!toggle)


        const followUserId=userItem.userItem._id
        console.log("followUserId is ",followUserId)
        const obj = {
            loggedInUserId: currentLoggedInUser._id,
            anotherUserId : followUserId
        }
        dispatch(followUserThunk(obj))
    }
    const setRemoveFollowHandler=()=>{
        // setToggle(toggle=!toggle)


        const unfollowUserId=userItem.userItem._id
        console.log("followUserId to be removed is ",unfollowUserId)
        const obj = {
            loggedInUserId: currentLoggedInUser._id,
            anotherUserId : unfollowUserId
        }
        dispatch(unfollowUserThunk(obj))
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

                    {
                        value? <button className="w-50 wd-btn wd-btn-color text-light border-0 shadow rounded-pill  mt-3 " onClick={setRemoveFollowHandler}>Unfollow</button>:
                        <button className="w-50 wd-btn bg-dark text-light border-0 shadow rounded-pill  mt-3 " onClick={setFollowHandler}>Follow</button>
                    }



                </div>

            </div>

        </>

    )

}
export default UsersToFollow;