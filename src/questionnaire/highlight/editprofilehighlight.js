import React from "react";
import "./index.css";
const HighlightProfile = ()=>{
    return(<>
            <div className="   rounded-top mt-3 ps-3 pe-3 pb-1 pt-2 wd-box bg-gradient ">
   <div className="row border-bottom ">
       <div className="col-10">
           <h6>Highlights</h6>
       </div>

   </div>
            <div className="row border-bottom bg-gradient wd-box">
                <div className="col-2"><i className="bi bi-balloon fs-4 text-secondary"></i></div>
                <div className="col-10 fs-10 p-1 ">Nov 4, 1995</div>
            </div>
        <div className="row border-bottom">
            <div className="col-2"><i className="bi bi-geo-alt fs-4 text-secondary"></i></div>
            <div className="col-10 fs-10 p-1 ">1185 Boylston Street, Apt No. 48, Boston, Massachusetts, 02215, United States of America</div>
        </div>

            <div className="row border-bottom">
                <div className="col-2"><i className="bi bi-envelope fs-4 text-secondary"></i></div>
                <div className="col-10 fs-10 p-1 ">prashar.p@northeastern.edu</div>
            </div>
            <div className="row ">
                <div className="col-2"><i className="bi bi-calendar-check fs-4 text-secondary "></i></div>
                <div className="col-10 fs-10 p-1 ">Joined Feb 28, 1996</div>
            </div>
            </div>
        </>
    );
}
export default HighlightProfile;