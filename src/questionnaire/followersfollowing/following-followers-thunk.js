import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from "./following-followers-service.js"
import {removeUserService, unfollowUserService} from "./following-followers-service.js";

export const followUserThunk = createAsyncThunk(
    'follow/followfollowers', async (obj) =>{
        return await service.followUserService(obj.loggedInUserId,obj.anotherUserId)
    }

)


export const unfollowUserThunk = createAsyncThunk(
    'follow/followfollowers', async (obj) =>{
        return await service.unfollowUserService(obj.loggedInUserId,obj.anotherUserId)
    }

)


export const removeUserThunk = createAsyncThunk(
    'follow/followfollowers', async (obj) =>{
        return await service.removeUserService(obj.loggedInUserId,obj.anotherUserId)
    }

)





