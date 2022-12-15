import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import QuestionsAnswers from "../questionsanswers";
import {findPostsThunk} from "../../services/post-thunks";


const Posts =()=>{
    const {posts, loading} = useSelector(state => state.postsData)
    let filteredPosts = posts.filter(p=>p.answers!==undefined && p.answers.length>0)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return(
        <>

            <div className="row">
                {
                    <ul className="list-group">
                        {

                                loading &&
                                        <li className="list-group-item">
                                            Loading...
                                        </li>

                        }

                        {
                            filteredPosts.map((item,index)=> <QuestionsAnswers key={item._id} postItem={item} index={index}/>)
                        }

                    </ul>
                }
            </div>

        </>
    );
}
export default Posts;