import React, {useEffect, useState} from "react";
//import "./index.css";
import {useDispatch} from "react-redux";
import {deletePostsThunk, findPostsThunk} from "../../services/post-thunks";
import {getUserFromId} from "../login/login-service";
import {createAnswersThunk} from "../../services/answers-thunks";



const QuestionsOnly = ({postItem}) => {

    const [userObj, setUserObj] = useState(null);
    const [answerText, setAnswerText] = useState("");
    console.log("this is inside question only ",answerText)
    const dispatch = useDispatch();
    // const deletePostHandler = (_id) => {
    //     console.log("Inside delete handler with id ", postItem._id);
    //     dispatch(deletePostsThunk(_id));
    //
    // }
    const showAnswerBox = ()=> {
        const x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    const postAnswer = ()=>{
        let today = new Date();
        let options = {year: "numeric",month:"long",day:"numeric"}
        let formattedDate = today.toLocaleDateString(undefined,options)
        const ansObj = {
            _id: new Date().getTime(),
            question_id: postItem._id,
            user_id: userObj._id,
            answers: answerText,
            time: formattedDate,
            comments: []
        }
        dispatch(createAnswersThunk(ansObj))
    }

    let a = null;

    useEffect(() => {
        // dispatch(findPostsThunk());
        // console.log("Getting all quesitons")

        const promiseUserObj = getUserFromId(postItem.user_id);
        promiseUserObj.then(result =>{
                                console.log("result inside promise is ",result)
                                setUserObj(result)
                                a= result;
                            }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    // const promiseUserObj = getUserFromId(postItem.user_id).then((s) => s);
    // promiseUserObj.then(result => {
    //     console.log("result is ", result)
    //     setUserObj(result);
    // });

    return (
        <>
            {
                userObj &&
                <div className="row mt-2 border-bottom pb-1 shadow-sm">
                    <div className="col-1 mt-2">
                        <img alt="" src="../../../images/profile-pic.jpg"
                             className="wd-profile-pic-q rounded-circle shadow"/>
                    </div>
                    <div className="col-8 mt-2">
                        <h6>{userObj.username}</h6>
                        <h6 className="text-secondary fw-light">{postItem.time}</h6>

                        <h5 className="wd-text">{postItem.question}</h5>
                    </div>
                    <div className="col-3 mt-2">
                        <button onClick={showAnswerBox}
                                className=" mt-5  bg-dark rounded-pill text-light ms-3 border-0 w-75 shadow"> Answer
                        </button>
                    </div>

                    <div id="myDIV" className=" myDIV-CSS row mt-2 ">
                            <textarea
                                className="ms-3 w-75 wd-textarea shadow border-0"
                                placeholder={"Answer this question"}
                                onChange={(event)=>setAnswerText(event.target.value)}
                            ></textarea>
                        <button onClick={postAnswer}
                                className=" mt-5  bg-dark rounded-pill text-light ms-3 border-0 w-75 shadow"> Post
                        </button>
                    </div>


                    {/*<div className="col-1 mt-2 ">*/}
                    {/*    <i className="bi bi-x-lg float-end"*/}
                    {/*       onClick={() => deletePostHandler(postItem._id)}></i>*/}
                    {/*</div>*/}


                </div>
            }
        </>




    );
}
export default QuestionsOnly;