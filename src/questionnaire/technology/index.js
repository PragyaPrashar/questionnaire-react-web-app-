import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";
import NewsComponentTech from "./news-api";

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
                    <NewsComponentTech/>
                </div>
            </div>
        </>

    );
}
export default TechComponent;