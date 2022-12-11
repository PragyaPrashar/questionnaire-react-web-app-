import axios from "axios";



export const loginUser = async (loginDetails)=>{

    return await axios.post("/login",loginDetails)

}