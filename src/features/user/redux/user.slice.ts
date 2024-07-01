import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../types/user.types';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import userApi from '@/features/user/api/user.api';

const initialState: UserState = {
    userList: []
}

export const fetchListUsers = createAsyncThunk("user/fetchListUsers",
    async () => {
        const response = await userApi.fetchListUsers()
        return response.data
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchListUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.userList = action.payload
        })
    }
})

const userPersistConfog = {
    key: "user",
    storage: storage,
    whitelist: ["userList"]
}

export const { } = userSlice.actions

export const userReducer = persistReducer(userPersistConfog, userSlice.reducer) 
