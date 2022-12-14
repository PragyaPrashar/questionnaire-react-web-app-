import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from "./following-followers-service.js"

export const followUserThunk = createAsyncThunk(
    'follow/followfollowers', async (obj) =>{
        return await service.followUserService(obj.loggedInUserId,obj.anotherUserId)
    }

)


