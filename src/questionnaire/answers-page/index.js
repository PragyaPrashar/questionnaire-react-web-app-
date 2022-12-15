import React, {useEffect, useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {createPostsThunk, findPostsThunk} from "../../services/post-thunks";
import 'reactjs-popup/dist/index.css';
import NewsComponent from "../newsAPI";
import WeatherComponent from "../weatherAPI";
import {useNavigate} from "react-router-dom";
import ModalComponent from "../modal/modalComponent";
import Answers from "../answers";
import QuestionsOnly from "../questions-only";


const AnswersComponent = () => {

    const {posts, loading} = useSelector(state => state.postsData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findPostsThunk());
        console.log("Getting all quesitons", posts)
    }, []);

    let unansweredQuestions = posts.filter(q => q.answers.length === 0);


    return (
        <>
        <div className="row mt-5 ms-2">
            <div className="col-8 ">

            {
                unansweredQuestions.map(item=> <QuestionsOnly key={item._id} postItem={item}/>)

            }

        </div>


        <div className="col-4 shadow-sm bg-gradient bg-light wd-height">
            <NewsComponent/>
            <br/>
            <WeatherComponent/>
        </div>
        </div>
    </>
        );
}
export default AnswersComponent;