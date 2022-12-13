import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";
import WeatherComponent from "../weatherAPI";
import NewsComponent from "../newsAPI";

const HomeComponent=()=>{
    return(
       <>
           <div className="row">
       <div className="col-2">
           <CategoriesSidebar/>
       </div>
           <div className="col-7">
               <Posts/>
           </div>
           <div className="col-3">
               <div>
                   <NewsComponent/>
                   <br/>
               <WeatherComponent/>
               </div>
           </div>
           </div>
       </>

    );
}
export default HomeComponent;