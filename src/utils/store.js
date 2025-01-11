import {configureStore} from "@reduxjs/toolkit";
import NavBarReducer from "./NavBarSlice.js";
import filterReducer from "./FilterSlice.js";

const appStore=configureStore({
    reducer: {
        NavBar:NavBarReducer,
        Filter:filterReducer
    }
});


export default appStore;