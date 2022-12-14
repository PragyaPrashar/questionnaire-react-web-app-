import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";
import NewsComponentMovies from "./news-api";

const MoviesComponent=()=>{
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
                    <NewsComponentMovies/>
                </div>
            </div>
        </>

    );
}
export default MoviesComponent;