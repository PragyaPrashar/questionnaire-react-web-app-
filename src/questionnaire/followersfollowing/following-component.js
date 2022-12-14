import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserFromId} from "../login/login-service";
import {findPostsThunk} from "../../services/post-thunks";
import {unfollowUserThunk} from "./following-followers-thunk";

const FollowingComponent = ({userObj})=>{
    // const [userObj, setUserObj] = useState(null);
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    const dispatch=useDispatch();
    // let a = null;


    //
    // useEffect(() => {
    //
    // const promiseUserObj = getUserFromId(userId);
    // promiseUserObj.then(result =>{
    //                         console.log("result inside promise is ",result)
    //                         setUserObj(result)
    //                         a= result;
    //                     }
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
// },[a]);




    const setRemoveFollowHandler=()=>{
        // setToggle(toggle=!toggle)
        console.log("userObj is ",userObj)


        const unfollowUserId=userObj._id
        console.log("followUserId to be removed is ",unfollowUserId)
        const obj = {
            loggedInUserId: currentLoggedInUser._id,
            anotherUserId : unfollowUserId
        }
        dispatch(unfollowUserThunk(obj))
    }


    return(
<>

    {


        <div className="row mt-2 border-bottom shadow-sm ">
            <div className="col-2"><img alt="" src="../../../images/profile-pic-f.jpg"
                                        className=" wd-profile-pic-f rounded-circle shadow mt-2 "/>
            </div>
            <div className="col-7">
                <div className="pt-1">
                    <span className="fw-bold">{userObj.username}</span>
                    {/*<p className="text-secondary">{str==="followers"?userObj.followers.length + " followers":userObj.following.length + " following"} </p>*/}
                </div>
            </div>
            <div className="col-3 ">

                <button className="w-50 wd-bttn wd-btn-color text-light border-0 shadow rounded-pill  mt-3 " onClick={setRemoveFollowHandler}>Unfollow</button>

            </div>

        </div>
    }

 </>

     )
}
export default  FollowingComponent;