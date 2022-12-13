import {createAsyncThunk} from "@reduxjs/toolkit";
import {loginUser} from "./login-service";

// export const loginThunk = createAsyncThunk("loginThunk",
//                                            async (loginDetails) => await loginUser(loginDetails))

export const loginThunk = createAsyncThunk(
    'users/loginUser',
    async (loginDetails) => {
        const res = await loginUser(loginDetails);
        return res.data;
    }
)
