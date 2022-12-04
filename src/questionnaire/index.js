import {Route, Routes} from "react-router";
import ProfileComponent from "./profile/profile-component.js";
import HomeComponent from "./home";
import EditProfile from "./highlight/edit-profile";
import React from "react";
import Questions from "./questions";

function Questionnaire() {
    return (
        <>

            <div className={"container"}>
                <div className="row ">
                </div>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/profile/*" element={<ProfileComponent/>}/>
                    <Route path="/edit-profile" element={<EditProfile/>}/>
                    <Route path="/questions" element={<Questions/>}/>
                </Routes>

            </div>

        </>
    );
}

export default Questionnaire;