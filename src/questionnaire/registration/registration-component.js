import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {registerUserThunk} from "./registration-thunk";

const RegistrationComponent = ()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [dob,setDob] = useState("");
    const [address,setAddress] = useState("");
    const [name,setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registrationHandler = ()=>{

        const newUser = {
            _id: email,
            username: name,
            dob:dob,
            address: address,
            password: password,
            user_profile_pic:"",
            user_status:"",
            questionsAsked:[],
            followers:[],
            following:[],
            comments:[]
        }

        dispatch(registerUserThunk(newUser)).then(()=>navigate("/"));

    }
    return(
        <div className={"row border border-dark rounded-4 shadow-lg border-2 p-2 wd-registration-row container wd-register-box"}>
            <div className={"row rounded-2 wd-login-row"}>
                <div className={"col-lg-5 col-sm-12"}>
                    <form>
                        <div className={"d-flex justify-content-center"}>
                            <h3 className={"mt-2"}>Sign Up</h3>
                        </div>

                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="text" className="form-control shadow w-75 "  placeholder="Name" onChange={(event)=>setName(event.target.value)}/>
                        </div>
                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="text" className="form-control shadow w-75" placeholder="Address" onChange={(event)=>setAddress(event.target.value)}/>
                        </div>
                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="email" className="form-control shadow w-75 "  placeholder="Email" onChange={(event)=>setEmail(event.target.value)}/>
                        </div>
                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="password" className="form-control shadow w-75" placeholder="New Password" onChange={(event)=>setPassword(event.target.value)}/>
                        </div>
                        {/*<div className="form-group mt-5 d-flex justify-content-center">*/}
                        {/*    <input type="password" className="form-control shadow w-75" placeholder="Confirm Password"/>*/}
                        {/*</div>*/}

                        <div className="form-group mt-5 d-flex justify-content-center">
                             <input type="date" className="form-control shadow w-75" placeholder={"Date of birth"} onChange={(event)=>setDob(event.target.value)}/>
                        </div>

                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="file" className="form-control shadow w-75"/>
                        </div>
                        <div className={"wd-signin-button-container mt-5"}>
                            <button onClick={registrationHandler} type="button" className="btn btn-primary btn-dark  w-75 shadow p-2 mb-5  rounded">Sign Up</button>
                        </div>
                        <Link to={"/login"} className={"text-decoration-none text-dark"}>
                            <h6 className={"d-flex justify-content-center"}>Already registered? Sign In here</h6>
                        </Link>
                        
                    </form>

                </div>
                <div className={"col-lg-7 col-sm-0 mt-5"}>
                    <img alt={""} src={"../../login.jpg"} className={"wd-image-register rounded-5 ms-5 d-lg-block d-sm-none"}/>
                </div>
            </div>
        </div>
    );
}
export default RegistrationComponent;