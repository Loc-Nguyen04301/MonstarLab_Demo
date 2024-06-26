import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import { authReducer } from "../features/auth/auth";

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

export default rootReducer