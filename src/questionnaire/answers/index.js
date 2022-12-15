// import React,{useEffect} from "react";
// import {useDispatch,useSelector} from "react-redux";
// import QuestionsAnswers from "../questionsanswers";
// import {findPostsThunk} from "../../services/post-thunks";
// import QuestionsOnly from "../questions-only";
// import {findAnswersThunk} from "../../services/answers-thunks";
//
//
// const Answers =()=>{
//
//     const {answers, answersloading} = useSelector(state => state.answersData)
//
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(findPostsThunk());
//         console.log("Questions only getting displayed",posts)
//     },[]);
//
//     const dispatchA = useDispatch();
//     useEffect(() => {
//         dispatch(findAnswersThunk());
//         console.log("Answers getting displayed",answers)
//     },[]);
//
//
//
//     return(
//         <>
//
//             <div className="row mt-2">
//                 {
//                     <ul className="list-group">
//                         {
//
//                             loading &&
//                             <li className="list-group-item">
//                                 Loading...
//                             </li>
//
//                         }
//
//                         {
//                             posts.map(item=> <QuestionsOnly key={item._id} postItem={item}/>)
//
//                         }
//
//                     </ul>
//                 }
//             </div>
//
//         </>
//     );
// }
// export default Answers;