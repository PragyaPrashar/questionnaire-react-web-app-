import React from "react";
import Posts from "../posts";
import CategoriesSidebar from "../categories-sidebar";
import NewsComponentSports from "./news-api";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const SportsComponent=()=>{
    const location = useLocation();
    const {posts, loading} = useSelector(state => state.postsData)
    console.log("posts in sports component",posts)
    let sportsQuestions = null;

    posts.forEach((element) => {
       let genreFromPost = element.genre;
       console.log("GenreFromPost",genreFromPost);
    });
    //
    // sportsQuestions = posts.filter(q => q.element.genre === 'Sports');
    // console.log(sportsQuestions);

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