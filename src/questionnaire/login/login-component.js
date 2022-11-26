import React from "react";
import "./index.css"
import {Link} from "react-router-dom";
const LoginComponent = ()=>{
    return(
        <div className={"row mt-5 border border-dark rounded-4 shadow-lg border-2 p-2"}>
            <div className={"row rounded-2 wd-login-row"}>
                <div className={"col-7"}>
                    <img alt={""} src={"../../login.jpg"} className={"wd-login-image rounded-5 p-4"}/>
                </div>
                <div className={"col-5"}>
                    <form>
                        <div className={"d-flex justify-content-center"}>
                            <h3 className={"mt-2"}>Sign In</h3>
                        </div>
                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="email" className="form-control shadow w-75 " id="useremail"  placeholder="Enter email"/>
                        </div>
                        <div className="form-group mt-5 d-flex justify-content-center">
                            <input type="password" className="form-control shadow w-75" id="password" placeholder="Password"/>
                        </div>
                        <div className={"wd-signin-button-container mt-5"}>
                            <button type="submit" className="btn btn-primary btn-dark  w-75 shadow p-2 mb-5  rounded">Sign In</button>
                        </div>
                        <Link to={"/register"} className={"text-decoration-none text-dark"}>
                            <h6 className={"d-flex justify-content-center ms-sm-4"}>Don't have an account yet? Register here</h6>
                        </Link>

                        <Link to={"/admin"} className={"text-decoration-none text-dark"}>
                            <h6 className={"d-flex justify-content-center ms-sm-4"}>Are you an admin? Sign in here</h6>
                        </Link>
                    </form>

                </div>
            </div>
        </div>

    );
};
export default LoginComponent;