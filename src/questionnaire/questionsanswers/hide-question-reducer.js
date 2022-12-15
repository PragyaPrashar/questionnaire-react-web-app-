import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    questions: []
}
const hideQuestionSlice = createSlice({
                                          name:"hideQuestion",
                                          initialState,
                                          reducers:{

                                              toggleShow : (state,{payload}) =>{
                                                  state.questions.push(payload)
                                                  console.log("payload is ",payload);
                                                  // state.questionId = payload.questionId
                                              },
                                              getHideObj : (state) => {
                                                  return state.questions
                                              }
                                          }


                                      });
export const {toggleShow,getHideObj} = hideQuestionSlice.actions;
export default hideQuestionSlice.reducer