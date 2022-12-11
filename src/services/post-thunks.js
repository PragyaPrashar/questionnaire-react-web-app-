import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from "./posts-service"

export const findPostsThunk = createAsyncThunk(
    'posts/findPosts', async () =>
        await service.findPosts()
)


export const deletePostsThunk = createAsyncThunk(
    'posts/deletePosts',
    async (postId) => {
        await service.deletePost(postId)
        return postId
    })


export const createPostsThunk=createAsyncThunk(
    'posts/createPosts',
    async(post)=>{
        await service.createPost(post);
        return post;
    }
)

export const updatePostsThunk =
    createAsyncThunk(
        'posts/updatePost',
        async (post) =>
            await service.updatePost(post)
    )

