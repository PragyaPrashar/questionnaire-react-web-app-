import axios from 'axios';
import answers from "../questionnaire/answers";
//const API_BASE = process.env.REACT_APP_API_BASE;
//const TUITS_API = `${API_BASE}/tuits`;
const QUANS_API = "http://localhost:4000/api";

export const createAnswer= async (answer)=>{
    const response = await axios.post(QUANS_API + "/answer", answer)
    return response.data;

}

export const updateAnswer = async (answer) => {
    await axios.put(`${QUANS_API + "/answer"}/${answers._id}`, answer);
    return answer;
}


export const findAnswer=async()=>{
    const response = await axios.get(QUANS_API + "/answer");
    const answers = response.data;
    return answers;
}


export const deleteAnswer=async(aid)=>{
    const response = await axios.delete(`${QUANS_API+ "/answer"}/${aid}`)
    return response.data
}
