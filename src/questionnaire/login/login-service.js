import axios from "axios";


const LOCAL_QUANS_API = "http://localhost:4000/";

export const loginUser = async (loginDetails)=>{
    console.log("printing input before sending \n",(loginDetails))
    return await axios.post(LOCAL_QUANS_API,(loginDetails),{
        headers : {"Content-Type":"application/json"}

    })

}