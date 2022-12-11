import axios from 'axios';
import posts from "../questionnaire/posts";
//const API_BASE = process.env.REACT_APP_API_BASE;
//const TUITS_API = `${API_BASE}/tuits`;
const QUANS_API = "http://localhost:4000/api";

export const createPost= async (post)=>{
    const response = await axios.post(QUANS_API + "/questions", post)
    return response.data;

}

export const updatePost = async (post) => {
    await axios.put(`${QUANS_API + "/questions"}/${posts._id}`, post);
    return post;
}




export const findPosts=async()=>{
    const response = await axios.get(QUANS_API + "/questions");
    const posts = response.data;
    return posts;
}


export const deletePost=async(pid)=>{
    const response = await axios.delete(`${QUANS_API+ "/questions"}/${pid}`)
    return response.data
}
