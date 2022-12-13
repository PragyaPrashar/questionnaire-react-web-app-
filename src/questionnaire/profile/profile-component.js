import React from "react";
import Navigation from "../navigation";
import Profile from "./index";
import HighlightProfile from "../highlight/editprofilehighlight";
import {Route, Routes} from "react-router";
import QuestionsAnswers from "../questionsanswers";
import Followersfollowing from "../followersfollowing";

function ProfileComponent() {
    return (
        <>
            {/*<div className={"row"}>*/}
            {/*   <Navigation/>*/}
            {/*</div>*/}
            <div className={"row mt-3"}>
                <div className={"col-8"}>
                   <Profile/>

                    <Routes>
                        <Route index element={<QuestionsAnswers/>}/>
                        <Route path="/followersfollowing" element={<Followersfollowing/>}/>
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