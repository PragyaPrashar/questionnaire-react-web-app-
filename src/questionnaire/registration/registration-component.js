import {Link} from "react-router-dom";
import React from "react";

const RegistrationComponent = ()=>{
    return(
        <div className={"row border border-dark rounded-4 shadow-lg border-2 p-2 wd-registration-row"}>
            <div className={"row rounded-2 wd-login-row"}>
                <div className={"col-lg-5 col-sm-12"}>
                    <form>
                        <div className={"d-flex justify-content-center"}>
                            <h3 className={"mt-2"}>Sign Up</h3>
                        </div>

                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="email" className="form-control shadow w-75 " id="useremail"  placeholder="Name"/>
                        </div>
                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="text" className="form-control shadow w-75" id="password" placeholder="Place where you live"/>
                        </div>
                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="email" className="form-control shadow w-75 " id="useremail"  placeholder="Email"/>
                        </div>
                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="password" className="form-control shadow w-75" id="password" placeholder="New Password"/>
                        </div>
                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="password" className="form-control shadow w-75" id="password" placeholder="Confirm Password"/>
                        </div>

                        <div className="form-group mt-5 d-flex justify-content-center">
                             <input type="date" className="form-control shadow w-75" id="date" placeholder={"Date of birth"}/>
                        </div>

                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="file" className="form-control shadow w-75" id="date" placeholder={"Date of birth"}/>
                        </div>
                        <div className={"wd-signin-button-container mt-5"}>
                            <button type="submit" className="btn btn-primary btn-dark  w-75 shadow p-2 mb-5  rounded">Sign Up</button>
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