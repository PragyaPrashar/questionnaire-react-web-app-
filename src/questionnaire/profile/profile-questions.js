import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {findPostsThunk} from "../../services/post-thunks";
import Questions from "./questions";


const ProfileQuestions =()=>{
    let {posts, loading} = useSelector(state => state.postsData)
    const currentLoggedInUser = useSelector(s=>s.users.currentUser)
    posts = posts.filter(post => post.user_id=== currentLoggedInUser._id)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return(
        <>

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
                            posts.map(item=> <Questions key={item._id} postItem={item}/>)
                        }

                    </ul>
                }
            </div>

        </>
    );
}
export default ProfileQuestions;