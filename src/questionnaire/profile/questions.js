import React, {useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {deletePostsThunk} from "../../services/post-thunks";
import {Link} from "react-router-dom";
import {getUserByIdThunk} from "../highlight/edit-profile-thunk";
import {getUserByIdService} from "../highlight/edit-profile-service";
import {getUserFromId} from "../login/login-service";

const Questions = (
    {
        postItem = {
            _id: 1,
            question: "How to stay healthy?",
            question_img: "../../../images/profile-pic.jpg",
            user_id: "prashar.p@northeastern.edu",
            time: 1,
            genre: ["health", "education"],
            answers: [1, 2, 3]
        }
    }
) => {

    const [userName, setUserName] = useState("");
    const {answers} = useSelector(state => state.answersData)
    let answerObj = answers.filter(a=>a.question_id===postItem._id)
    console.log("filtered ans is ",answerObj)
    const dispatch = useDispatch();
    const deletePostHandler = (_id) => {
        console.log("Inside delete handler with id ", postItem._id);
        dispatch(deletePostsThunk(_id));

    }
   // const currentLoggedInUser = useSelector(s=>s.users.currentUser)

    const promiseUserObj = getUserFromId(postItem.user_id).then((s)=>s);
    promiseUserObj.then(result => {
        console.log("result is ",result.username)
        setUserName(result.username);
    });


    return (

        <div className="row mt-2 border-bottom pb-1 shadow-sm">
            <div className="col-1 mt-2">
                <img alt="" src="../../../images/profile-pic.jpg"
                     className="wd-profile-pic-q rounded-circle shadow"/>
            </div>
            <div className="col-10 mt-2">

                <h6>{userName}</h6>
                <h6 className="text-secondary fw-light">{postItem.time}</h6>

            </div>
            <div className="col-1 mt-2 ">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deletePostHandler(postItem._id)}></i>
            </div>

            <h5 className="wd-text">{postItem.question}</h5>
            {
                answerObj[0] &&
                <span className="wd-text">{answerObj[0].answers}</span>
            }            {/*Aish has to give me the link for details page.*/}
            <span ><Link to="/quans/001/details">see more</Link></span>


        </div>

    );
}
export default Questions;