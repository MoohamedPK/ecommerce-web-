import { createSlice } from "@reduxjs/toolkit";
import { TProducts, TLoading } from "src/types";
import actGetCollectionByPrefix from "./action/actGetCollectionByPrefix";
import isString from "../../types/guardForString";

type TCollectionState = {
    records:TProducts[],
    loading: TLoading,
    error: string | null
}

const initialState:TCollectionState = {
    records: [],
    loading: "idle",
    error: null
}   

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        cleanupCollectionSatat: (state) => {
            state.records = []
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(actGetCollectionByPrefix.pending, (state) => {
            state.error= null
            state.loading= "pending"
        })
        builder.addCase(actGetCollectionByPrefix.fulfilled, (state, action) => {
            state.error= null
            state.loading= "succeeded"
            state.records= action.payload 
        })
        builder.addCase(actGetCollectionByPrefix.rejected, (state, action) => {
            state.loading= "failed"
            if (isString(action.payload)) {
                state.error = action.payload
            }
        })
    }
})

export default collectionSlice.reducer;
export const {cleanupCollectionSatat} = collectionSlice.actions