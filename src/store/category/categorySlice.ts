import { createSlice } from "@reduxjs/toolkit";
import { TCategory, TLoading } from "../../types/index";
import isString from "../../types/guardForString";
import actGetCategory from "./action/actGetCategory";


type TCategoryState = {
    records:TCategory[],
    loading: TLoading,
    error: string | null
}

const initialState:TCategoryState = {
    records: [],
    loading:"idle",
    error:null
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetCategory.pending, (state) => {
            state.error = null
            state.loading= "pending"
        })

        builder.addCase(actGetCategory.fulfilled, (state, action ) => {
            state.error= null
            state.loading = "succeeded"
            state.records = action.payload
        })

        builder.addCase(actGetCategory.rejected, (state, action ) => {
            state.loading = "failed"
            if (isString(action.payload)) {
                state.error = action.payload
            }
        })
    }
})


export default categorySlice.reducer