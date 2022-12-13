import QuestionsAnswers from "../questionsanswers";
import {useSelector} from "react-redux";
const SearchComponent = ()=>{

    let {posts} = useSelector(state => state.postsData)
    const searchString = useSelector(state => state.search.searchField);
    console.log("actual posts are \n",posts);
    console.log("search string is ",searchString)
    let filteredPosts = posts.filter(p => (p.question.toLowerCase().includes(searchString)) ||
                                          (p.user_id.toLowerCase().includes(searchString))
    )
    // let filteredPosts = posts.filter(p => p.question.toLowerCase().includes("bob".toLowerCase()) ||
    //                  p.user_id.toLowerCase().includes(searchString.toLowerCase()));

    console.log("filtered  posts are \n",filteredPosts);



    return (
        <>
            {
                filteredPosts.map(item=> <QuestionsAnswers key={item._id} postItem={item}/>)
            }
        </>

);
}
export default SearchComponent;