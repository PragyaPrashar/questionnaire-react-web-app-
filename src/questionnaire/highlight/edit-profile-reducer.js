import {createSlice} from "@reduxjs/toolkit";
import {editedProfileThunk, editProfileThunk} from "./edit-profile-thunk.js";
import {useSelector} from "react-redux";

const initialState={
   currentUser: null
}
const editProfileSlice=createSlice({
    name:"editProfile",
    initialState,
    extraReducers:{
        [editProfileThunk.fulfilled]:(state,{payload})=>{
            state.currentUser={
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

        },
        [editedProfileThunk.fulfilled]:(state,{payload})=>{
            state.currentUser={
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
            console.log("this is updated object ",state.currentUser)

        },
    }
}

);
export default editProfileSlice.reducer;