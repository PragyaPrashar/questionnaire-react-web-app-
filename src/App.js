//import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Questionnaire from "./questionnaire/index.js";
import Navigation from "./questionnaire/navigation";
import LoginComponent from "./questionnaire/login/login-component";
import RegistrationComponent from "./questionnaire/registration/registration-component";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import postsReducer from "./questionnaire/questionsanswers/posts-reducer";
import userReducer from "./questionnaire/login/user-reducer";
import {Provider} from "react-redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
const store = configureStore({
                                 reducer: {
                                     postsData: postsReducer,
                                     users: userReducer
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
