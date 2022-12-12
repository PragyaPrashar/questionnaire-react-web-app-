import {createSlice} from "@reduxjs/toolkit";
import {loginThunk} from "./login-thunks";
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
                state.curretUser = null;
            }
        }

    }
);
export default userSlice.reducer;