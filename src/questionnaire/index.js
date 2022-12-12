import {Route, Routes} from "react-router";
import ProfileComponent from "./profile/profile-component.js";
import HomeComponent from "./home";
import EditProfile from "./highlight/edit-profile";
import React from "react";
import Questions from "./questions";
import SportsComponent from "./sports";
import MusicComponent from "./music";
import MoviesComponent from "./movies";
import TravelComponent from "./travel";
import HealthComponent from "./health/health";
import TechComponent from "./technology";
import FoodComponent from "./food";
import DetailsComponent from "./detailspage";

function Questionnaire() {
    return (
        <>

            <div className={"container"}>
                <div className="row ">
                </div>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/quans/discover" element={<HomeComponent/>}/>
                    <Route path="/profile/*" element={<ProfileComponent/>}/>
                    <Route path="/edit-profile" element={<EditProfile/>}/>
                    <Route path="/questions" element={<Questions/>}/>
                    <Route path="/quans/travel" element={<TravelComponent/>}/>
                    <Route path="/quans/health" element={<HealthComponent/>}/>
                    <Route path="/quans/technology" element={<TechComponent/>}/>
                    <Route path="/quans/movies" element={<MoviesComponent/>}/>
                    <Route path="/quans/food" element={<FoodComponent/>}/>
                    <Route path="/quans/music" element={<MusicComponent/>}/>
                    <Route path="/quans/sports" element={<SportsComponent/>}/>
                    <Route path="/quans/001/details" element={<DetailsComponent/>}/>
                </Routes>

            </div>

        </>
    );
}

export default Questionnaire;