import "./index.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import FollowerComponent from "./follower-component";
import {findUsersThunk} from "../../services/profile-thunks";

const Followers = () => {
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    let arr = currentLoggedInUser.followers;
    let {users,loading}=useSelector(state=>state.profileusers)
    let filteredUsers=users.filter(u=>arr.includes(u._id))
    console.log("array is" ,filteredUsers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUsersThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <>
            <div>
                <div className="row shadow-sm  fw-bold wd-color text-secondary p-1">
                    <span>{arr.length} Followers</span>
                </div>
            </div>
            {
                filteredUsers.map(f=> <FollowerComponent userObj ={f}></FollowerComponent>)
            }

        </>
    );
}
export default Followers;