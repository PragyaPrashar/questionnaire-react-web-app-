import React, {useEffect} from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findUsersThunk} from "../../services/profile-thunks";

const Profile = (
    {
        user = {
            _id: 1,
            username: "Pragya Prashar",
            user_profile_pic: "../../../images/profile-pic.jpg",
            user_status: "“Not all those who wander are lost.”",
            email_id: "prashar.p@northeastern.edu",
            dob: "4 Nov 1995",
            address: "1185 Boylston Street, Apt No. 48, Boston, Massachusetts, 02215, United States of America",
            password: "123",
            questionsAsked: [1, 2, 3, 4],
            answersAnswered: [5, 6, 7, 8],
            followers: [9, 10, 11, 12],
            following: [13, 14, 15, 16],
            comments: [16, 18, 19, 20]
        }
    }
) => {


    const {users, loading} = useSelector(state => state.usersData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUsersThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);




    return (
        <>
            <div className="row mt-3">
                <div className="col-2">
                    <img alt="" src="../../../images/profile-pic.jpg"
                         className=" wd-profile-pic rounded-circle shadow "/>
                </div>
                <div className="col-7">
                    <span className="fw-bold display-6">{users.username}</span>
                    <div className="text-secondary mt-2">
                        <span className="text-secondary">85 followers</span> &#x2022; <span
                        className="text-secondary">50 following</span>
                        <div className="mt-2">
                            <span className="text-secondary">{users.user_status}</span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <Link to="/edit-profile">
                        <button
                            className="rounded-pill float-end wd-edit border-0 w-75 text-light"> Edit
                            Profile
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row  pb-1 mt-5 border-bottom">
                <div className="col-3">
                    <Link className="text-decoration-none text-secondary p-2  bg-gradient"
                          to={"/profile/"}><span className="wd-onHover">Questions</span></Link>
                </div>
                <div className="col-3">
                    <Link className="text-decoration-none text-secondary p-2" to={"/profile/"}><span
                        className="wd-onHover">Answers</span></Link>
                </div>
                <div className="col-3">
                    <Link className="text-decoration-none text-secondary p-2"
                          to="/profile/followersfollowing/"><span
                        className="wd-onHover">Followers</span></Link>
                </div>
                <div className="col-3">
                    <Link className="text-decoration-none text-secondary p-2"
                          to="/profile/followersfollowing/"><span
                        className="wd-onHover">Following</span></Link>
                </div>
            </div>
            {/*<div className="row">*/}
            {/*    <div className="col-12">*/}
            {/*    Changing Section*/}


            {/*    </div>*/}
            {/*</div>*/}


        </>
    );
}
export default Profile;