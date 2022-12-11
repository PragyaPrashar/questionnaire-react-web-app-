import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from "./profile-service"

export const findUsersThunk = createAsyncThunk(
    'posts/findPosts', async () =>
        await service.findUser()
)


// export const deleteUsersThunk = createAsyncThunk(
//     'posts/deletePosts',
//     async (postId) => {
//         await service.deleteUser(postId)
//         return postId
//     })


// export const createUsersThunk=createAsyncThunk(
//     'posts/createPosts',
//     async(post)=>{
//         await service.createUser(post);
//         return post;
//     }
// )

export const updateUsersThunk =
    createAsyncThunk(
        'posts/updatePost',
        async (post) =>
            await service.updateUser(post)
    )

