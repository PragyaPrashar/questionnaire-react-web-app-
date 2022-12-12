import {createAsyncThunk} from "@reduxjs/toolkit";
import {loginUser} from "./login-service";

export const loginThunk = createAsyncThunk("loginThunk",
                                           async (loginDetails) => await loginUser(loginDetails)
);