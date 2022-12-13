import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    searchField: ""
}
const searchSlice = createSlice(
    {
        name: "search",
        initialState,
        reducers: {
            setSearchField(state,action){
                state.searchField = action.payload
                console.log("current search field in reducer is ",state.searchField)
            }
        }

    }
);
export const {setSearchField} = searchSlice.actions
export default searchSlice.reducer;