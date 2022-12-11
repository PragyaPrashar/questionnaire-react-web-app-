//import logo from './logo.svg';
import './App.css';
import React from "react";
import HomeComponent from "./questionnaire/home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Questionnaire from "./questionnaire/index.js";
import Navigation from "./questionnaire/navigation";
import LoginComponent from "./questionnaire/login/login-component";
import RegistrationComponent from "./questionnaire/registration/registration-component";
function App() {
  return (


      <>

    <BrowserRouter>

      {/*<div className="container">*/}

        <Routes>

          <Route path="/" element={<LoginComponent/>}/>
          <Route path="/register" element={<RegistrationComponent/>}/>
          <Route path="/quans/*" element={<Questionnaire/>}/>
        </Routes>

      {/*</div>*/}
    </BrowserRouter>



      </>
  );
}

export default App;
