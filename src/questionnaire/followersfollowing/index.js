import "./index.css";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import FollowerComponent from "./follower-component";
import {getUserFromId} from "../login/login-service";

const Following = () => {
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    let arr = currentLoggedInUser.following;
    console.log("array is" ,arr)

    return (
        <>
            <div>
                <div className="row shadow-sm  fw-bold wd-color text-secondary p-1">
                    <span>0 Following</span>
                </div>
            </div>
            {
                arr.map(f=>
                    // const promiseUserObj = getUserFromId(f).then((s)=>s);
                    // let res;
                    // console.log("before promise")
                    // promiseUserObj.then(result => {
                    //     console.log("result is ",result)
                    //     // setUserObj(result);
                    //     res = result;
                    //     console.log("after promise ",res)
                    //     return <FollowerComponent user={res}></FollowerComponent>
                    // });
                            <FollowerComponent userId ={f}></FollowerComponent>
                )
            }

        </>
    );
}
export default Following;