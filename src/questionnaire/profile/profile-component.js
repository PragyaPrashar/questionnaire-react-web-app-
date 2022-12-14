import React, {useEffect, useState} from "react";
import Navigation from "../navigation";
import Profile from "./index";
import HighlightProfile from "../highlight/editprofilehighlight";
import {Route, Routes} from "react-router";
import QuestionsAnswers from "../questionsanswers";
import Following from "../followersfollowing/following";
import {useSelector} from "react-redux";
import ProfileQuestions from "./profile-questions";
import Followers from "../followersfollowing/followers";

function ProfileComponent() {
    // you need logged in user object
    // you need all the questions that a user has asked
    // iterate over the array of questions and for each question display QuestionsAnswers component


    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    const questionsAsked=currentLoggedInUser.questionsAsked

    // useEffect(() => {
    //     // dispatch(findTuitsThunk());
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[currentLoggedInUser]);

    return (
        <>
            {/*<div className={"row"}>*/}
            {/*   <Navigation/>*/}
            {/*</div>*/}
            <div className={"row mt-3"}>
                <div className={"col-8"}>
                   <Profile/>
                    {/*{*/}
                    {/*    questionsAsked.map(item => <QuestionsAnswers postItem={item}/>)*/}
                    {/*}*/}
                    <Routes>



                        <Route index element={<ProfileQuestions/>}/>

                        <Route path="/followers" element={<Followers/>}/>
                        <Route path="/following" element={<Following/>}/>
                    </Routes>
                </div>
                <div className={"col-4"}>
                    <HighlightProfile/>
                </div>
            </div>
        </>
    );
}

export default ProfileComponent;