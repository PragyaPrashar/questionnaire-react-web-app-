import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";
import NewsComponentSports from "./news-api";

const SportsComponent=()=>{
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
                    <NewsComponentSports/>
                </div>
            </div>
        </>

    );
}
export default SportsComponent;