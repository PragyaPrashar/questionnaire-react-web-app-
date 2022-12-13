import React, {useState} from "react";
import NewsList from "./news-list";

function NewsComponent(){
    return(
        <div>
            <h1>News App</h1>
            <NewsList/>
        </div>
    );
}
export default NewsComponent;