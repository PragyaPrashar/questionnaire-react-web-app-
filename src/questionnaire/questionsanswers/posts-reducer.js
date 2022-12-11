import {createSlice} from "@reduxjs/toolkit";
import {updatePostsThunk, createPostsThunk,deletePostsThunk, findPostsThunk}
    from "../../services/post-thunks";

const initialState = {
    posts: [],
    loading: false
}

const postsSlice = createSlice({
                                   name: 'posts',
                                   initialState,
                                   // reducers: {
                                   //     addTuit(state, action) {
                                   //         const obj={
                                   //
                                   //             _id: 123,
                                   //             avatarIcon:"../images/space_icon.jpg",
                                   //             topic: "Web Development",
                                   //             userName: "ReactJS",
                                   //             username: "SpaceX",
                                   //             time: "2h",
                                   //             title: "React.js is a component based front end library that makes it very easy to build Single Page Application or SPAs",
                                   //             image: "../images/react.png",
                                   //             tagline:action.payload,
                                   //             tweets:"",
                                   //             tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
                                   //             liked: true,
                                   //             replies: 123,
                                   //             retuits: 432,
                                   //             likes: 2345,
                                   //             handle: "@spaceX",
                                   //
                                   //             comment:"4.2K",
                                   //             retweet:"3.5K",
                                   //             heart:"37.5K"
                                   //
                                   //
                                   //         }
                                   //
                                   //         state.unshift(obj);
                                   //
                                   //     },
                                   //     deleteTuit(state,action){
                                   //         const index=state.findIndex(tuit=>tuit._id===action.payload);
                                   //         state.splice(index,1);
                                   //     }
                                   //
                                   // }


                                   extraReducers: {
                                       [findPostsThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.posts = []
                                           },
                                       [findPostsThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.posts = payload
                                           },
                                       [findPostsThunk.rejected]:
                                           (state) => {
                                               state.loading = false
                                           },

                                       [deletePostsThunk.fulfilled] : (state, { payload }) => {
                                           state.loading = false
                                           state.posts = state.posts
                                               .filter(p => p._id !== payload)
                                       },

                                       [createPostsThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.posts.unshift(payload)
                                           }

                                       // [updatePostsThunk.fulfilled]:
                                       //     (state, { payload }) => {
                                       //         state.loading = false
                                       //         const tuitNdx = state.tuits
                                       //             .findIndex((t) => t._id === payload._id)
                                       //         state.tuits[tuitNdx] = {
                                       //             ...state.tuits[tuitNdx],
                                       //             ...payload
                                       //         }
                                       //     }



                                   }

                               });
// export const {addTuit, deleteTuit} = tuitsSlice.actions
export default postsSlice.reducer;