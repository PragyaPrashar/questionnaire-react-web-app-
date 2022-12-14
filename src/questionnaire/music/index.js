import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";
import NewsComponentMusic from "./news-api";

const MusicComponent=()=>{
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
                    <NewsComponentMusic/>
                </div>
            </div>
        </>

    );
}
export default MusicComponent;