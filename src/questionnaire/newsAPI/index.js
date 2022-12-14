import React, {useState} from "react";
import NewsList from "./news-list";

function NewsComponent(){
    return(
        <div className= "wd-header justify-content-center">
            <h5>Trending Today</h5>
            <NewsList/>
        </div>
    );
}
export default NewsComponent;