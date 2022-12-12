import axios from "axios";


const LOCAL_QUANS_API = "http://localhost:4000/";

export const registerUser = async (newUser)=>{
    return await axios.post(LOCAL_QUANS_API+"register",(newUser))

}