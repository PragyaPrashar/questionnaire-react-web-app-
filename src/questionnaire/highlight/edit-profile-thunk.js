import {createAsyncThunk} from "@reduxjs/toolkit";
import {editProfileService} from "./edit-profile-service";

import {getUserByIdService} from "./edit-profile-service";

export const editProfileThunk=createAsyncThunk(
    'users/editprofile', async(editProfile)=>{
        const res=await editProfileService(editProfile);
        return res.data;
    }
)

export const getUserByIdThunk=createAsyncThunk(
    'users/editedprofile', async(editedProfile)=>{
        const res=await getUserByIdService(editedProfile);
        return res.data;
    }
)