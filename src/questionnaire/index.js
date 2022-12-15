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
import Navigation from "./navigation";
import AdminComponent from "./admin/admin-component";
import SearchComponent from "./search/search-component";
import ModalComponent from "./modal/modalComponent";

function Questionnaire() {
    return (
        <>
                <Navigation/>
                <div className={"container"}>

                    <div className="row ">
                    </div>
                    <Routes>
                        <Route path="/*" element={<HomeComponent/>}/>
                        <Route path="/search" element={<SearchComponent/>}/>
                        <Route path="/discover" element={<HomeComponent/>}/>
                        <Route path={"/modal"} element={<ModalComponent/>}/>
                        <Route path="/profile/*" element={<ProfileComponent/>}/>
                        <Route path="/edit-profile" element={<EditProfile/>}/>
                        <Route path="/questions" element={<Questions/>}/>
                        {/*<Route path="/login" element={<LoginComponent/>}/>*/}
                        {/*<Route path="/register" element={<RegistrationComponent/>}/>*/}
                        <Route path="/admin" element={<AdminComponent/>}/>
                        <Route path="/travel" element={<TravelComponent/>}/>
                        <Route path="/health" element={<HealthComponent/>}/>
                        <Route path="/technology" element={<TechComponent/>}/>
                        <Route path="/movies" element={<MoviesComponent/>}/>
                        <Route path="/food" element={<FoodComponent/>}/>
                        <Route path="/music" element={<MusicComponent/>}/>
                        <Route path="/sports" element={<SportsComponent/>}/>
                        <Route path="/001/details" element={<DetailsComponent/>}/>
                    </Routes>
                </div>
        </>
    );
}

export default Questionnaire;