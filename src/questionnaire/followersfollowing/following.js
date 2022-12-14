import "./index.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import FollowingComponent from "./following-component";
import {getUserFromId} from "../login/login-service";
import {findUsersThunk} from "../../services/profile-thunks";

const Following = () => {
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    let arr = currentLoggedInUser.following;
    let {users, loading} = useSelector(state => state.profileusers)
    let filteredUsers = users.filter(u=>arr.includes(u._id))
    console.log("array is" ,arr)
    console.log("filteredUsers is" ,filteredUsers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUsersThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <>
            <div>
                <div className="row shadow-sm  fw-bold wd-color text-secondary p-1">
                    <span>{arr.length} Following</span>
                </div>
            </div>
            {
                filteredUsers.map(f=> <FollowingComponent userObj ={f}></FollowingComponent>)
            }

        </>
    );
}
export default Following;