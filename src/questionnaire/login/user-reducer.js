import {createSlice} from "@reduxjs/toolkit";
import {loginThunk} from "./login-thunks";
import {registerUserThunk} from "../registration/registration-thunk";
const initialState = {
    currentUser: null
}
const userSlice = createSlice(
    {
        name: "users",
        initialState,
        extraReducers: {
            [loginThunk.fulfilled]: (state, { payload }) => {
                console.log("inside login reducer");
                state.currentUser = {
                    _id: payload._id,
                    password: payload.password
                }
            },
            [loginThunk.rejected]: (state, action) => {
                console.log("inside login reducer rejected")
                state.currentUser = null;
            },
            [registerUserThunk.fulfilled]: (state,action) =>{
                console.log("inside register reducer")
                state.currentUser = action.payload;
            }
        }

    }
);
export default userSlice.reducer;