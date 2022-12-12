import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";

const TravelComponent=()=>{
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
                    API calls for travel (Aish work)
                </div>
            </div>
        </>

    );
}
export default TravelComponent;