import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth.types";

const initialState: AuthState = {
    accessToken: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase()
    }

})

export const { } = authSlice.actions

export const authReducer = authSlice.reducer
