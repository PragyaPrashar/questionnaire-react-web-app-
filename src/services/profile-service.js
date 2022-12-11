import axios from 'axios';
import profile from "../questionnaire/profile";
//const API_BASE = process.env.REACT_APP_API_BASE;
//const TUITS_API = `${API_BASE}/tuits`;
const QUANS_API = "http://localhost:4000/api";

// export const createUser= async (profile)=>{
//     const response = await axios.post(QUANS_API + "/user", profile)
//     return response.data;
//
// }

export const updateUser = async (profile) => {
    await axios.put(`${QUANS_API + "/user"}/${profile._id}`, profile);
    return profile;
}




export const findUser=async()=>{
    const response = await axios.get(QUANS_API + "/user");
    const posts = response.data;
    return posts;
}


// export const deleteUser=async(pid)=>{
//     const response = await axios.delete(`${QUANS_API+ "/user"}/${pid}`)
//     return response.data
// }
