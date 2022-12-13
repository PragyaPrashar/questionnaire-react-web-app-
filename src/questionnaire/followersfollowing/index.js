import "./index.css";
import React from "react";
import {useSelector} from "react-redux";
import FollowerComponent from "./follower-component";

const Followersfollowing = () => {
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    return (
        <>
            <div>
                <div className="row shadow-sm  fw-bold wd-color text-secondary p-1">
                    <span>{currentLoggedInUser.followers.length} Followers</span>
                </div>
            </div>
            {
                currentLoggedInUser.followers.map(f=> <FollowerComponent></FollowerComponent>)
            }
        </>
    );
}
export default Followersfollowing;