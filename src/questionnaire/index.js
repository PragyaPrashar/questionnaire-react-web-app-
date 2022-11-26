import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ProfileComponent from "./profile/profile-component.js";
import LoginComponent from "./login/login-component";
import React from "react";
import RegistrationComponent from "./registration/registration-component";
import AdminComponent from "./admin/admin-component";

function Questionnaire(){
return(
  <>
          <Routes>
              <Route path="/" element={<ProfileComponent/>}/>
              <Route path="/login" element={<LoginComponent/>}/>
              <Route path="/register" element={<RegistrationComponent/>}/>
              <Route path="/admin" element={<AdminComponent/>}/>
          </Routes>


  </>
);
}
export default Questionnaire;