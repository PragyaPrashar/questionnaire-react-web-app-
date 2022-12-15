import {createSlice} from "@reduxjs/toolkit";
import {loginThunk} from "./login-thunks";
import {registerUserThunk} from "../registration/registration-thunk";
import {followUserThunk} from "../followersfollowing/following-followers-thunk";
import {unfollowUserService} from "../followersfollowing/following-followers-service";

const initialState = {
    currentUser: null
}

// _id: String,
//     username: String,
//     user_profile_pic: String,
//     user_status: String,
//     dob: String,
//     address: String,
//     password:  String,
//     questionsAsked: {type: Array, of: Number},
// answersAnswered: {type:Array, of:Number},
// followers: {type: Array, of: Number},
// following: {type: Array, of: Number},
// comments: {type: Array, of: Number}}
const userSlice = createSlice(
    {
        name: "users",
        initialState,
        extraReducers: {
            [loginThunk.fulfilled]: (state, {payload}) => {
                console.log("inside login reducer");
                if(payload==="" || payload ==null){
                    return
                }
                state.currentUser = {
                    _id: payload._id,
                    username: payload.username,
                    user_profile_pic: payload.user_profile_pic,
                    user_status: payload.user_status,
                    dob: payload.dob,
                    address: payload.address,
                    password: payload.password,
                    questionsAsked: payload.questionsAsked,
                    answersAnswered: payload.answersAnswered,
                    followers: payload.followers,
                    following: payload.following,
                    comments: payload.comments,
                }
                // console.log("current logged user after update ",state.currentUser)
            },
            [loginThunk.rejected]: (state, action) => {
                console.log("inside login reducer rejected")
                state.currentUser = null;
            },
            [registerUserThunk.fulfilled]: (state, action) => {
                console.log("inside register reducer")
                state.currentUser = action.payload;
                console.log("current registered user is \n", state.currentUser)
            },
            [followUserThunk.fulfilled]: (state, action)=>{
                console.log("This followUser Thunk")
                state.currentUser=action.payload;
                console.log("current logged user follower \n", state.currentUser)
            },

            [unfollowUserService.fulfilled]:(state,action)=>{
                state.currentUser=action.payload;
            }
        }

    }
);
export default userSlice.reducer;