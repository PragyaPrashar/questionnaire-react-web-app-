import axios from "axios";
const QUANS_API = "http://localhost:4000/api";

export const followUserService = async (currentLoggedInUserId,followUserId) => {
   // const result= await axios.put(`${QUANS_API + "/user"}/${currentLoggedInUserId}/${followUserId}`);
    const result= await axios.get(QUANS_API + "/user/"+currentLoggedInUserId + "/" +followUserId);
    return result.data;
}