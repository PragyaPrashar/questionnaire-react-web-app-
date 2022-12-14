import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";
import NewsComponentHealth from "./news-api";

const HealthComponent=()=>{
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
                    <NewsComponentHealth/>
                </div>
            </div>
        </>

    );
}
export default HealthComponent;