import React, {useEffect, useState} from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {setSearchField} from "../search/search-reducer";
import {loginThunk} from "../login/login-thunks";
import {useLocation} from "react-router";
const Navigation=()=>{

    let currentLoggedInUser = useSelector(s=>s.users.currentUser)
    // const [currentUser,setCurrentUser]= useState(null)
    let [searchText,setSearchText] = useState("");

    let [disable,setDisable] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname.includes("admin")){
            setDisable(true)
        }
    },[])

    const logoutHandler=()=>{
        console.log("inside navigation with user \n",currentLoggedInUser)
        currentLoggedInUser = null;
        navigate("/");
    }
    const searchHandler = (event)=>{
        setSearchText(event.target.value);
        dispatch(setSearchField(searchText))
        navigate("/quans/search")
    }
    // const profileHandler=()=>{
    //     const obj = { state: {
    //             data: currentLoggedInUser
    //         } }
    //     navigate("/quans/profile",obj)
    // }
    return(
        <>

        <div className="row  border-bottom shadow-lg wd-background bg-gradient d-flex justify-content-md-start justify-content-evenly">
            <div className="col-1">
                <Link to="/quans/"><img alt="" src="../../../images/questionnaire_logo.png" className="wd-logo "/></Link>
            </div>
            <div className="col-1 wd-house">
                <Link to="/quans/"><i className="bi bi-house-door fs-4 text-light wd-pos "></i></Link>
            </div>
            {
                !disable &&
                <div className="col-1 wd-house">
                    <Link to="/quans/questions">  <i className="bi bi-question-square fs-4 text-light wd-pos"></i></Link>
                </div>
            }

            {
                !disable &&
                <div className="col-1 wd-house">
                    <Link to="/quans/answers">   <i className="bi  bi-pencil-square fs-4 text-light wd-pos"></i></Link>
                </div>
            }

            <div className="col-1 wd-house">
                <Link to="/quans/users"><i className="bi bi-people-fill fs-4 text-light wd-pos"></i></Link>
                {/*<i className="bi  bi-pencil-square fs-4 text-light wd-pos"></i>*/}
            </div>
            <div className="col-4 wd-search-col">
                <div className="wd-input-container  mt-1">
                 <input className="ps-3 rounded-pill pb-0 border-1 wd-search-border wd-pos shadow-lg" type="search"
                        placeholder="search"  onChange={(event)=>searchHandler(event)} value={searchText}/>
                    {/*<i className="bi bi-search wd-search text-secondary"></i>*/}
                </div>
            </div>
            {
                currentLoggedInUser &&
                <div className="col-1">
                    <Link to="/quans/profile"><img alt="" src="../../../images/profile-pic.jpg" className="wd-profile rounded-circle shadow mt-2 ms-lg-3"/></Link>
                    {/*<img alt="" src="../../../images/profile-pic.jpg" className="wd-profile rounded-circle shadow mt-2 ms-lg-3" onClick={profileHandler}/>*/}
                </div>

            }
            {
                currentLoggedInUser &&
                <div className="col-1">
                    <h6 className="text-light wd-logout" onClick={logoutHandler}>Logout</h6>
                </div>

            }
            {
                !currentLoggedInUser &&

                    <div className="col-sm-2 col-md-2 col-1 ms-md-5 ms-xl-0">
                        <Link to={"/"} className={"text-decoration-none"}>
                        <h6 className="text-light wd-logout">Sign In</h6>
                        </Link>
                    </div>


            }
        </div>

        </>
    );
}
export default Navigation;