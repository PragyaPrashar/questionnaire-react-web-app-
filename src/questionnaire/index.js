import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ProfileComponent from "./profile/profile-component.js";

function Questionnaire(){
return(
  <>
      <div className={"container"}>
          <ProfileComponent/>
      </div>

  </>
);
}
export default Questionnaire;