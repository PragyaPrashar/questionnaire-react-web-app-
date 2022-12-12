import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";

const TechComponent=()=>{
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
                    API calls for tech (Aish work)
                </div>
            </div>
        </>

    );
}
export default TechComponent;