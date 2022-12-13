import {createAsyncThunk} from "@reduxjs/toolkit";
import {loginUser} from "../login/login-service";

export const searchThunk = createAsyncThunk(
    'users/SearchUser',
    async (searchString) => {
        const res = await loginUser(searchString);
        return res.data;
    }
)