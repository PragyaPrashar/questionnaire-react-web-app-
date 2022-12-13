import {createAsyncThunk} from "@reduxjs/toolkit";
import {registerUser} from "./registration-service";

export const registerUserThunk = createAsyncThunk(
    'users/registerUser',
    async (newUser) => {
        const res = await registerUser(newUser);
        return res.data;
    }
)