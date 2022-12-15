import "./index.css";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import FollowerComponent from "./follower-component";
import {findUsersThunk} from "../../services/profile-thunks";

const Followers = (
    {user}
) => {
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    const  [disable,setDisable] = useState(false)

    // let arr = currentLoggedInUser.followers;
    console.log("current user is " +user)
    let arr = user.followers;
    console.log("clicked user followers are"+arr)
    let {users,loading}=useSelector(state=>state.profileusers)
    let filteredUsers=users.filter(u=>arr.includes(u._id))
    console.log("array is" ,filteredUsers)
    const dispatch = useDispatch();
    useEffect(() => {
        if(currentLoggedInUser.username.includes("admin")){
            setDisable(true)
        }
        dispatch(findUsersThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <>
            {
                !disable &&
                <div>
                    <div className="row shadow-sm  fw-bold wd-color text-secondary p-1">
                        <span>{arr.length} Followers</span>
                    </div>
                </div>
            }

            {
                !disable && filteredUsers.map(f=> <FollowerComponent userObj ={f}></FollowerComponent>)
            }

        </>
    );
}
export default Followers;