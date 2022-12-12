import {createSlice} from "@reduxjs/toolkit";
import {loginThunk} from "./login-thunks";

const userReducer = createSlice(
    {
        name: "users",
        initialState: {
            currentUser: {
                _id: "",
                password: ""
            }
        },
        extraReducers: {
            [loginThunk.fulfilled]: (state, action) => {
                console.log("inside login reducer");
                state.currentUser._id = action.payload.data._id;
                state.currentUser.password = action.payload.data.password;
            },
            [loginThunk.rejected]: (state, action) => {
                console.log("inside login reducer rejected")
                state.curretUser = null;
            }
        }

    }
);
export default userReducer.reducer;