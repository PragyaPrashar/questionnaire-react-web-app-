import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ProfileComponent from "./profile/profile-component.js";
import LoginComponent from "./login/login-component";
import React from "react";
import RegistrationComponent from "./registration/registration-component";

function Questionnaire(){
return(
  <>
          <Routes>
              <Route path="/" element={<ProfileComponent/>}/>
              <Route path="/login" element={<LoginComponent/>}/>
              <Route path="/register" element={<RegistrationComponent/>}/>

          </Routes>


  </>
);
}
export default Questionnaire;