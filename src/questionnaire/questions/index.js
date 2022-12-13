import React, {useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {createPostsThunk} from "../../services/post-thunks";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Questions = () => {

    let [questionasked, setWhatsHappening] = useState('');
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)


    const textAreaHandler = (event) => {
        let text = event.target.value;
        setWhatsHappening(text);
    }
    const disPatch = useDispatch();
    const postClickHandler = () => {
        //disPatch(addTuit(whatsHappening));

        const questionObj = {

            _id: new Date().getTime(),
            question_img: "../../../images/profile-pic.jpg",
            time: 1,
            genre: ["health", "education"],
            answers: [1, 2, 3],
            user_id: currentLoggedInUser._id,
            question: questionasked

        }

        // const newQuestion = {
        //     ...questionObj,
        //     // user_id: currentLoggedInUser._id,
        //     // question: questionasked
        // }
        disPatch(createPostsThunk(questionObj));

    }

    return (<>
        <div className="row mt-5 ms-2">
            <div className="col-8 ">
                <div className="row  w-100 h-100 shadow">
                    <div className="col-1 mt-5">
                        <img alt="" className="ms-2 mt-5 rounded-circle wd-size-image shadow"
                             src="../../../images/profile-pic.jpg"></img>
                    </div>
                    <div className="col-9 mt-5 ">

                        <div className="row  w-75">

                            <select className="border-1 shadow ms-3">
                                <option value="genre">Select a genre:</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Education">Education</option>
                                <option value="Food">Food</option>
                                <option value="Health">Health</option>
                                <option value="News">
                                    News
                                </option>
                                <option value="Sports">Sports</option>
                                <option value="Technology">Technology</option>

                            </select>


                        </div>

                        <div className="row mt-2">
                            <textarea value={questionasked}
                                      className="ms-3 w-100 wd-textarea shadow border-0"
                                      placeholder={"Ask what's in your mind"}
                                      onChange={textAreaHandler}></textarea>
                        </div>
                        <div className="wd-line-width ms-2 mt-5">
                            <hr/>
                        </div>
                        <div className="row ">
                            <h1 className="fw-bold text-secondary mt-3">'The important thing is not
                                to stop questioning.' </h1>
                            <h6 className="text-secondary mt-1"> -Albert Einstein</h6>
                        </div>

                    </div>
                    <div className="col-2 mt-5">



                        {/*<Popup trigger={<button*/}
                        {/*    className=" mt-5 bg-gradient bg-dark rounded-pill text-light ms-3 border-0 w-75 shadow"*/}
                        {/*    onClick={postClickHandler}> Ask*/}
                        {/*</button>}*/}
                        {/*       position="right center">*/}
                        {/*    <div>Your question is successfully asked!</div>*/}
                        {/*    /!*<button>Click here</button>*!/*/}
                        {/*</Popup>*/}


                        <button
                             className=" mt-5 bg-gradient bg-dark rounded-pill text-light ms-3 border-0 w-75 shadow"
                            onClick={postClickHandler}> Ask
                        </button>







                    </div>

                </div>

            </div>

            <div className="col-4 shadow-sm bg-gradient bg-light wd-height">
                Api's (Aish will do this work)
            </div>
        </div>

    </>);
}
export default Questions;