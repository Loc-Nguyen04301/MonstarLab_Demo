import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./stateSlice"
import { authReducer } from "@/features/auth/auth";
import { userReducer } from "@/features/user/user";
import stateAppReducer from "./stateSlice"

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    user: userReducer,
    stateApp: stateAppReducer
})

export default rootReducer