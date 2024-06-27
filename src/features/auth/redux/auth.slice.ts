import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, LoginDataDef } from "../types/auth.types";
import authApi from "../api/auth.api";
import { PayloadAction } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const initialState: AuthState = {
    accessToken: null
}

export const loginIn = createAsyncThunk("auth/loginIn",
    async (data: LoginDataDef) => {
        const response = await authApi.logIn(data)
        console.log(response)
        const { token: accessToken } = response.data
        return { accessToken }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginIn.fulfilled, (state, action: PayloadAction<AuthState>) => {
            console.log(action.payload)
            state.accessToken = action.payload.accessToken
        })
        builder.addCase(loginIn.rejected, (state, action) => {
            state.accessToken = null
        })
    }
})

const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["accessToken"]
}

export const { } = authSlice.actions

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer) 
