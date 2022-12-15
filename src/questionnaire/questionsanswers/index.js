import React, {useEffect, useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {deletePostsThunk} from "../../services/post-thunks";
import {Link, useNavigate} from "react-router-dom";
import {getUserByIdThunk} from "../highlight/edit-profile-thunk";
import {getUserByIdService} from "../highlight/edit-profile-service";
import {getUserFromId} from "../login/login-service";
import {findAnswersThunk} from "../../services/answers-thunks";

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

    // const [userName, setUserName] = useState("");
    const [userObj,setUserObj] = useState(null);
    let a = null;
    // const[visitedProfile,setVisitedProfile]=useState(false);
    const {answers} = useSelector(state => state.answersData)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deletePostHandler = (_id) => {
        console.log("Inside delete handler with id ", postItem._id);
        dispatch(deletePostsThunk(_id));

    }

    console.log("answers array is ",answers)

    let answerObj = answers.filter(a=>a.question_id===postItem._id)
    console.log("filtered ans is ",answerObj)

    // const promiseUserObj = getUserFromId(postItem.user_id).then((s)=>s);
    // promiseUserObj.then(result => {
    //     console.log("result is ",result.username)
    //     setUserName(result.username);
    // });
    useEffect(() => {
        dispatch(findAnswersThunk())
        const promiseUserObj = getUserFromId(postItem.user_id);
        promiseUserObj.then(result =>{

                                console.log("visited promise is ",result)

                                setUserObj(result)
                                a= result;
                            }
        );
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[a]);
    console.log("user obj inside question page ",userObj)
    const profile=()=>{
        // setVisitedProfile(true)
        console.log("user obj onclick  ",userObj)

        const obj = { state: {
                data: userObj
            } }

        navigate("/quans/profile",obj)

    }







    return (
        <>

            {
                userObj &&
                <div className="row mt-2 border-bottom pb-1 shadow-sm">
                    <div className="col-1 mt-2">
                        <img alt="" src="../../../images/profile-pic.jpg"
                             className="wd-profile-pic-q rounded-circle shadow"/>
                    </div>
                    <div className="col-10 mt-2">

                        {/*<Link to="/quans/visitedProfile" className="text-decoration-none text-dark" ><h6>{userName}</h6></Link>*/}

                        {/*{*/}
                        {/*    visitedProfile && <VisitedProfile></VisitedProfile>*/}
                        {/*}*/}

                        <h6 onClick={profile}>{userObj.username}</h6>
                        <h6 className="text-secondary fw-light ">{postItem.time}</h6>

                    </div>
                    <div className="col-1 mt-2 ">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deletePostHandler(postItem._id)}></i>
                    </div>

                    <h5 className="wd-text">{postItem.question}</h5>
                    {
                        answerObj[0] &&
                        <span className="wd-text">{answerObj[0].answers}</span>
                    }

                    {/*Aish has to give me the link for details page.*/}
                    <span ><Link to="/quans/001/details">see more</Link></span>


                </div>
            }
        </>




);
}
export default QuestionsAnswers;