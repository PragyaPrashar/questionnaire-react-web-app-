import Posts from "../posts";
import React, {useEffect} from "react";
import "./index.css";
import posts from "../posts";
import postsReducer from "../questionsanswers/posts-reducer";
import answersReducer from "../answers/answers-reducer";
import userReducer from "../login/user-reducer";
import searchReducer from "../search/search-reducer";
import editProfileReducer from "../highlight/edit-profile-reducer";
import profileReducer from "../profile/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {findUsersThunk} from "../../services/profile-thunks";
import {findAnswersThunk} from "../../services/answers-thunks";
import {findPostsThunk} from "../../services/post-thunks";
import * as service from "../../services/profile-service";
import * as postsService from "../../services/posts-service.js"
import * as usersService from "../../services/profile-service.js"


const AdminComponent = ()=>{
    let {users}=useSelector(state=>state.profileusers)
    let{posts}=useSelector(state=>state.postsData)
    const {answers} = useSelector(state => state.answersData)
    const dispatch = useDispatch();
    let usersCount = 0;
    useEffect(() => {
        dispatch(findUsersThunk());
        dispatch(findAnswersThunk());
        dispatch(findPostsThunk());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    let promiseObj = service.findUser();
    let promiseObj2 = postsService.findPosts();
    let promiseObj3 = usersService.findUser();

    console.log("promise Obj is ",promiseObj.then(a=>usersCount=a.length))
    console.log("usersCount is ",usersCount)
    promiseObj2.then(a=>usersCount=a.length)
    promiseObj3.then(a=>a)













    return(
        <>
           <div className="row mt-5 wd-text-move border shadow-sm wd-header-background bg-gradient">
                   <h2 className="text-dark">Application Statistics are as follows</h2>
           </div>

            <div className="row">
               <div className="col-4 wd-text-move border shadow-lg">

                   <img alt="" className="wd-img-size" src="../../../images/registered.png"/>
                   {
                       users && <h3>Registered Users { users.length-1 }</h3>
                   }

               </div>
                <div className="col-4 wd-text-move shadow-lg border">

                    <img alt="" className="wd-img-size-second" src="../../../images/questions.png"/>
                    {
                        posts &&
                        <h3>Questions Posted {posts.length-2} </h3>
                    }

                </div>
                <div className="col-4 wd-text-move shadow-lg border">
                    <img alt="" className="wd-img-size-third" src="../../../images/answer.jpg"/>
                    {
                        answers &&
                        <h3>Answers Posted {answers.length}</h3>
                    }

                </div>
            </div>

            <div className="row mt-5 wd-text-move border shadow-sm wd-header-background bg-gradient">
                <div>
                    <h2 className="text-dark"> Questions asked till now are as follows</h2>

                </div>
            </div>
            <div className="row ms-4">
                    {/*<Posts/>*/}
            </div>
        </>
    )


}
export default AdminComponent;