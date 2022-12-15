import React, {useEffect, useState} from "react";
import "./index.css"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findUsersThunk} from "../../services/profile-thunks";
import {useLocation} from "react-router";

const Profile = (
    { user }
) => {
const navigate=useNavigate()
    const currentLoggedInUser = useSelector(s => s.users.currentUser)
    const [disable,setDisable] = useState(false);
    //
    // if(location!==undefined&&location.state!==null){
    //     const {data} = location.state;
    //     console.log("location state is ",location.state)
    //     if(data!==null && data._id!==currentLoggedInUser._id) {
    //         user = data
    //     }
    // }

    const setQuestion=(path)=>{

        const obj={state:{data:user}}
        navigate(path,obj)

    }

    useEffect(() => {
        if(currentLoggedInUser.username.includes("admin")){
            setDisable(true)
        }
        // dispatch(findTuitsThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentLoggedInUser]);

    return (
        <>
            <div className="row mt-3">
                <div className="col-2">
                    <img alt="" src="../../../images/profile-pic.jpg"
                         className=" wd-profile-pic rounded-circle shadow "/>
                </div>
                <div className="col-7">
                    <span className="fw-bold display-6">{user.username}</span>
                    <div className="text-secondary mt-2">
                        <span className="text-secondary">{user.followers.length} followers</span>  &#x2022;
                         <span className="text-secondary"> {user.following.length} following</span>
                        <div className="mt-2">
                            <span className="text-secondary">{user.user_status}</span>
                        </div>
                    </div>
                </div>
                {
                    currentLoggedInUser._id ===user._id &&
                    <div className="col-3">
                        <Link to="/quans/edit-profile">
                            <button className="rounded-pill float-end wd-edit border-0 w-75 text-light"> Edit Profile</button>
                        </Link>
                    </div>
                }


            </div>
            {
                !disable &&
                <div className="row  pb-1 mt-5 border-bottom">
                    <div className="col-3">
                        {/*<Link className="text-decoration-none text-secondary p-2  bg-gradient"*/}
                        {/*      to={"/quans/profile/"}><span*/}
                        {/*    className="wd-onHover" >Questions</span></Link>*/}

                        <span className="wd-onHover text-decoration-none text-secondary p-2  bg-gradient" onClick={()=>setQuestion("/quans/profile/")}>Questions</span>



                    </div>
                    <div className="col-3">
                        {/*<Link className="text-decoration-none text-secondary p-2"*/}
                        {/*      to={"/quans/profile/"}><span*/}
                        {/*    className="wd-onHover">Answers</span></Link>*/}


                        <span className="wd-onHover text-decoration-none text-secondary p-2"  onClick={()=>setQuestion("/quans/profile/")}>Answers</span>




                    </div>
                    <div className="col-3">



                        {/*<Link className="text-decoration-none text-secondary p-2"*/}
                        {/*      to="/quans/profile/followers"><span*/}
                        {/*    className="wd-onHover">Followers</span></Link>*/}


                        <span className="wd-onHover text-decoration-none text-secondary p-2" onClick={()=>setQuestion("/quans/profile/followers")}>Followers</span>


                    </div>
                    <div className="col-3">
                        {/*<Link className="text-decoration-none text-secondary p-2"*/}
                        {/*      to="/quans/profile/following"><span*/}
                        {/*    className="wd-onHover">Following</span></Link>*/}


                        <span
                            className="wd-onHover text-decoration-none text-secondary p-2" onClick={()=>setQuestion("/quans/profile/following")}>Following</span>

                    </div>
                </div>
            }





        </>
    );
}
export default Profile;