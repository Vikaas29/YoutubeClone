import { createSlice } from "@reduxjs/toolkit";

const NavBarSlice= createSlice({
    name:"NavBar",
    initialState:{
        value:"hidden"
    },
    reducers:{
        changeState:(state,action)=>{
            if(state.value=="hidden"){
                state.value="block";
            }
            else state.value="hidden"
        }
    }
});

export const {changeState}=NavBarSlice.actions;
export default NavBarSlice.reducer;