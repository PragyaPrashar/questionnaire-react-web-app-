import {createAsyncThunk} from "@reduxjs/toolkit";
import {editProfileService} from "./edit-profile-service";

import {editedProfileService} from "./edit-profile-service";

export const editProfileThunk=createAsyncThunk(
    'users/editprofile', async(editProfile)=>{
        const res=await editProfileService(editProfile);
        return res.data;
    }
)

export const editedProfileThunk=createAsyncThunk(
    'users/editedprofile', async(editedProfile)=>{
        const res=await editedProfileService(editedProfile);
        return res.data;
    }
)