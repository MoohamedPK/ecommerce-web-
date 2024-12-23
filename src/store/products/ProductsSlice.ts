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
        
        // func high to low
        filterHighToLow: (state) => {
            state.records = state.records.sort((a,b) => {
                return b.price - a.price
            })
        },
        // func low to high
        filterLowToHigh: (state) => {
            state.records = state.records.sort((a,b) => {
                return a.price - b.price
            })
        },
        resetRecordsOnChange: (state) => {
            state.records = initialState.records.slice()
        },

        //targeted product
        targetedProduct: (state, action) => {
            state.records = state.records.filter((record) => {
                // console.log(record.id === action.payload)
                return record.id === action.payload
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
export const {filterHighToLow, filterLowToHigh, resetRecordsOnChange, targetedProduct} = ProductsSlice.actions