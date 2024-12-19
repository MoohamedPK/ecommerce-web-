import { createSlice } from "@reduxjs/toolkit";
import { TProducts, TLoading, } from "src/types";
import actGetProducts from "./action/ActGetProducts";


interface IProductsSlice  {
    records:TProducts[],
    loading:TLoading,
    error: string | null
}

const initialState:IProductsSlice = {
    records: [],
    loading:"idle",
    error:null,
}

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        cleanupProductsState: (state) => {
            state.records = []
        },

        // func low to high

        filterHighToLow: (state) => {
            state.records = state.records.sort((a,b) => {
                return b.price - a.price
            })
        },

        filterLowToHigh: (state) => {
            state.records = state.records.sort((a,b) => {
                return a.price - b.price
            })
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProducts.pending, (state) => {
            state.error = null
            state.loading = "pending"
        })

        builder.addCase(actGetProducts.fulfilled, (state, action) => {
            state.error = null
            state.loading = "succeeded"
            state.records = action.payload
        })

        builder.addCase(actGetProducts.rejected, (state, action) => {
            state.error = action.payload as string
            state.loading = "failed"
        })
    }
})

export default ProductsSlice.reducer;
export const {cleanupProductsState, filterHighToLow, filterLowToHigh} = ProductsSlice.actions