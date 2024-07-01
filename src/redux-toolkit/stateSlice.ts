import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export type stateApp = {
    loading: boolean;
};
const initialState: stateApp = {
    loading: false,
}

export const stateAppSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    }
})

export const { setLoading } = stateAppSlice.actions
export default stateAppSlice.reducer 