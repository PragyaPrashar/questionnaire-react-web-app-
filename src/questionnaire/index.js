import {Route, Routes} from "react-router";
import ProfileComponent from "./profile/profile-component.js";
import HomeComponent from "./home";
import EditProfile from "./highlight/edit-profile";
import React from "react";
import Questions from "./questions";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import postsReducer from "./questionsanswers/posts-reducer";
import usersReducer from "./profile/profile-reducer"


const store=configureStore({
                               reducer: {
                                   postsData: postsReducer, usersData: usersReducer
                               } });
function Questionnaire() {
    return (
        <>
            <Provider store={store}>
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
            </Provider>
        </>
    );
}

export default Questionnaire;