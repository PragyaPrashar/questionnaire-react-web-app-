//import logo from './logo.svg';
import './App.css';
import React from "react";
import HomeComponent from "./questionnaire/home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Questionnaire from "./questionnaire/editprofilehighlight.js";
import Navigation from "./questionnaire/navigation";
import LoginComponent from "./questionnaire/login/login-component";
function App() {
    return (


        <>

            <BrowserRouter>
                <Navigation/>
                <div className="container">

                    <Routes>
                        <Route path="/*" element={<Questionnaire/>}/>
                    </Routes>
                </div>
            </BrowserRouter>

        </>
    );
}

export default App;
