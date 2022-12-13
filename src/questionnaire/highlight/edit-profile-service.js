import axios from "axios";


const LOCAL_QUANS_API="http://localhost:4000/api";

export const editProfileService=async (editProfile)=>{
    return await axios.put(LOCAL_QUANS_API +"/user/"+ editProfile._id,editProfile)
}

export const editedProfileService=async(editedProfile)=>{
    return await axios.get(LOCAL_QUANS_API+"/user/"+editedProfile._id)

}
