import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deletePostsThunk} from "../../services/post-thunks";
import {Link} from "react-router-dom";

const QuestionsAnswers = (
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

    const dispatch = useDispatch();
    const deletePostHandler = (_id) => {
        console.log("Inside delete handler with id ", postItem._id);
        dispatch(deletePostsThunk(_id));

    }
    return (

            <div className="row mt-2 border-bottom pb-1 shadow-sm">
                <div className="col-1 mt-2">
                    <img alt="" src="../../../images/profile-pic.jpg"
                         className="wd-profile-pic-q rounded-circle shadow"/>
                </div>
                <div className="col-10 mt-2">

                    <h6>Pragya Prashar</h6>
                    <h6 className="text-secondary fw-light">{postItem.time}</h6>

                </div>
                <div className="col-1 mt-2 ">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deletePostHandler(postItem._id)}></i>
                </div>

                <h5 className="wd-text">{postItem.question}</h5>
                <span className="wd-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                {/*Aish has to give me the link for details page.*/}
            <span ><Link to="/quans/001/details">see more</Link></span>


            </div>

);
}
export default QuestionsAnswers;