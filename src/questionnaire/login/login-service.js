import axios from "axios";


const LOCAL_QUANS_API = "http://localhost:4000/";

export const loginUser = async (loginDetails)=>{
    console.log("printing input before sending \n",(loginDetails))
    return await axios.post(LOCAL_QUANS_API,(loginDetails))

}
export const getUserFromId = async (userId) => {
    console.log("getting user object with id \n",(userId))
    const res = await axios.get(LOCAL_QUANS_API + "api/user/"+userId)
    return res.data;
}