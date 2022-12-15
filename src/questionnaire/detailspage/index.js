import React from "react";
import CategoriesSidebar from "../categories-sidebar";
import NewsComponent from "../newsAPI";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const DetailsComponent=()=>{

    const location = useLocation();
    const {answers} = useSelector(state => state.answersData)
    const {user} = useSelector(state => state.users)
    let detailsObj = null;
    let  questionO = null;
    let answerO = null;
    let userO = null;
    if(location!==undefined&&location.state!==null){
        let {questionObj,answerObj,userObject} = location.state.data;
        questionO = questionObj;
        answerO = answerObj;
        userO = userObject;
        console.log("question state is ",location.state)

    }
    console.log("user id in detailsObj: ",userO._id)
    console.log("current question inside details component is ",questionO)
    const answerArray = questionO.answers;
    console.log("current answer ID inside details component is ",answerArray)

    console.log("filtered ans is ",answerO)
    let answer = answerO.answers;
    console.log("filtered ans is ",answer)
    const currentUsrId = answerO.user_id;
    //
    // let answerUser = userO.filter(a=>a.username===answerO.user_id);
    // console.log("filtered ans is ",answer)

    return(
        <>
            <div className="row">
                <div className="col-2">
                    <CategoriesSidebar/>
                </div>

                <div className="col-7">
                    <div className="row">
                    <div className = "col-1 mt-4 ">
                        <img alt="" src="../../../images/profile-pic.jpg"
                             className="wd-profile-pic-q rounded-circle shadow"/>

                    </div>


                    <div className=" col-11 mt-4">
                        <span className="ps-4 font-weight-bold ">{userO.username}</span>
                        <br/>
                        <span className=" ps-4 font-weight-bold">{userO._id}</span>
                    </div>


                    </div>

                    <div className=" mt-4 pt-3 pb-3 ps-3  rounded border-bottom border-top ps-3 shadow-sm  bg-dark">
                        <h2 className="font-weight-bold ps-2 me-2 text-white"><i
                            className="pe-3 bi bi-question-octagon-fill"></i>  {questionO.question}</h2>
                    </div>
                    <div className="  pt-5 pb-3 pe-3 rounded border-bottom border-top border-left w-100 h-75 ps-2 me-2 shadow-sm ">
                        <span className=" font-weight-bold">{answer}</span>
                        <div>
                            {/*<span className="ps-4 font-weight-bold ">{answerUser.username}</span>*/}

                        </div>
                    </div>
                    <div className="  pt-3 pb-3 pb-5 pe-4 rounded border-bottom border-top ps-3 shadow-sm  bg-dark">
                        <div className=" ps-4 font-weight-bold text-white float-end ">{answerO.user_id}
                            <i className="ps-3 bi bi-chat-square-quote-fill text-white"></i></div>
                    </div>
                    </div>

                <div className="col-3">
                    <NewsComponent/>
                </div>
            </div>
        </>

    );
}
export default DetailsComponent;