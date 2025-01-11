import { createSlice } from "@reduxjs/toolkit";

const filterSlice= createSlice({
    name:"Filter",
    initialState:{
        value:""
    },
    reducers:{
        changeFilterState:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {changeFilterState}=filterSlice.actions;
export default filterSlice.reducer;