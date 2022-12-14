import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getUserFromId} from "../login/login-service";
import {findPostsThunk} from "../../services/post-thunks";

const FollowerComponent = ({userId})=>{
    const [userObj, setUserObj] = useState(null);
    let a = null;

    useEffect(() => {

    const promiseUserObj = getUserFromId(userId);
    promiseUserObj.then(result =>{
                            console.log("result inside promise is ",result)
                            setUserObj(result)
                            a= result;
                        }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[a]);


    return(
<>

    {
        userObj && userObj.username &&

        <div className="row mt-2 border-bottom shadow-sm ">
            <div className="col-2"><img alt="" src="../../../images/profile-pic-f.jpg"
                                        className=" wd-profile-pic-f rounded-circle shadow mt-2"/>
            </div>
            <div className="col-7">
                <div className="pt-1">
                    <span className="fw-bold">{userObj.username}</span>
                    {/*<p className="text-secondary">{str==="followers"?userObj.followers.length + " followers":userObj.following.length + " following"} </p>*/}
                </div>
            </div>
            <div className="col-3 ">

                <button className="w-50 wd-bttn text-light border-0 shadow rounded-pill bg-gradient mt-3 ">Follow</button>

            </div>

        </div>
    }

 </>

     )
}
export default  FollowerComponent;