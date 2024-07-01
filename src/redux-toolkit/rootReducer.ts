import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import { authReducer } from "@/features/auth/auth";
import { userReducer } from "@/features/user/user";

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    user: userReducer
})

export default rootReducer