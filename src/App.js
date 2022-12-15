import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Questionnaire from "./questionnaire/index.js";
import LoginComponent from "./questionnaire/login/login-component";
import RegistrationComponent from "./questionnaire/registration/registration-component";
import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./questionnaire/questionsanswers/posts-reducer";
import userReducer from "./questionnaire/login/user-reducer.js";
import {Provider} from "react-redux";
import searchReducer from "./questionnaire/search/search-reducer.js";
import editProfileReducer from "./questionnaire/highlight/edit-profile-reducer";
import profileReducer from "./questionnaire/profile/profile-reducer.js";
import ModalComponent from "./questionnaire/modal/modalComponent";
import hideQuestionReducer from "./questionnaire/questionsanswers/hide-question-reducer";

const store = configureStore({
                                 reducer: {
                                     postsData: postsReducer,
                                     users: userReducer,
                                     search : searchReducer,
                                     editProfile:editProfileReducer,
                                     profileusers:profileReducer,
                                     hideQuestion : hideQuestionReducer
                                 }
                             });

function App() {

    return (

        <>
            <Provider store={store}>
                <BrowserRouter>

                    {/*<div className="container">*/}

                    <Routes>

                        <Route path="/" element={<LoginComponent/>}/>
                        <Route path="/register" element={<RegistrationComponent/>}/>
                        <Route path="/quans/*" element={<Questionnaire/>}/>
                    </Routes>

                    {/*</div>*/}
                </BrowserRouter>

            </Provider>

        </>
    );
}

export default App;
