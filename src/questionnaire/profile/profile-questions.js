import React, {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {findPostsThunk} from "../../services/post-thunks";
import Questions from "./questions";
import {useLocation} from "react-router";


const ProfileQuestions =(
    {user}
)=>{
    let {posts, loading} = useSelector(state => state.postsData)
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    const  [disable,setDisable] = useState(false)
    // posts = posts.filter(post => post.user_id=== currentLoggedInUser._id)


    // const location = useLocation();
    //
    // if(location!==undefined&&location.state!==null){
    //     const {data} = location.state;
    //     console.log("location state is ",location.state)
    //     if(data!==null && data._id!==currentLoggedInUser._id) {
    //         user = data
    //     }
    // }
    let filteredPosts = posts.filter(post => post.user_id=== user._id)
    const dispatch = useDispatch();
    useEffect(() => {
        if(currentLoggedInUser.username.includes("admin")){
            setDisable(true)
        }
        dispatch(findPostsThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return(
        <>
            {
                !disable &&
                <div className="row mt-2">
                    {
                        <ul className="list-group">
                            {

                                loading &&
                                <li className="list-group-item">
                                    Loading...
                                </li>

                            }

                            {
                                filteredPosts.map(item=> <Questions key={item._id} postItem={item}/>)
                            }

                        </ul>
                    }
                </div>
            }



        </>
    );
}
export default ProfileQuestions;