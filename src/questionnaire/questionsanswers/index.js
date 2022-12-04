import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
const QuestionsAnswers=()=>{
return(
    <>
    <div className="row mt-2 border-bottom pb-1 shadow-sm">
        <div className="col-1 mt-2">
            <img alt="" src="../../../images/profile-pic.jpg" className="wd-profile-pic-q rounded-circle shadow"/>
        </div>
        <div className="col-10 mt-2">

          <h6>Pragya Prashar</h6>
            <h6 className="text-secondary fw-light">12 hrs ago</h6>

        </div>
        <div className="col-1 mt-2 ">
            <i className="bi bi-x-lg float-end"></i>
        </div>

            <h5 className="wd-text">How to stay healthy?</h5>
           <span className="wd-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            {/*Aish has to give me the link for details page.*/}
            <span ><Link to="">see more</Link></span>



    </div>

        <div className="row mt-2 border-bottom pb-1 shadow-sm">
            <div className="col-1 mt-2">
                <img alt="" src="../../../images/profile-pic.jpg" className="wd-profile-pic-q rounded-circle shadow"/>
            </div>
            <div className="col-10 mt-2">

                <h6>Pragya Prashar</h6>
                <h6 className="text-secondary fw-light">12 hrs ago</h6>

            </div>
            <div className="col-1 mt-2 ">
                <i className="bi bi-x-lg float-end"></i>
            </div>

            <h5 className="wd-text">How to stay healthy?</h5>
            <span className="wd-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            {/*Aish has to give me the link for details page.*/}
            <span ><Link to="">see more</Link></span>



        </div>



    </>
);
}
export default QuestionsAnswers;