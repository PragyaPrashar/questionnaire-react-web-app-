import React from "react";
import Posts from "../posts";

const HomeComponent=()=>{
    return(
       <>
           <div className="row">
       <div className="col-2">
           Tags (Aish work)
       </div>
           <div className="col-7">
               <Posts/>
           </div>
           <div className="col-3">
               API calls(Aish work)
           </div>
           </div>
       </>

    );
}
export default HomeComponent;