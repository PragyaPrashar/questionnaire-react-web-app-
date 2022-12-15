import {createSlice} from "@reduxjs/toolkit";
import {createAnswersThunk,deleteAnswersThunk, findAnswersThunk}
    from "../../services/answers-thunks";

const initialState = {
    answers: [],
    loading: false
}

const answersSlice = createSlice({
                                   name: 'answers',
                                   initialState,
                                   extraReducers: {
                                       [findAnswersThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.answers = []
                                           },
                                       [findAnswersThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.answers = payload
                                           },
                                       [findAnswersThunk.rejected]:
                                           (state) => {
                                               state.loading = false
                                           },

                                       [deleteAnswersThunk.fulfilled] : (state, { payload }) => {
                                           state.loading = false
                                           state.answers = state.answers
                                               .filter(p => p._id !== payload)
                                       },

                                       [createAnswersThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.answers.unshift(payload)
                                           }
                                   }

                               });
export default answersSlice.reducer;