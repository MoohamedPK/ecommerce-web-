import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantity } from "./selectors/selectors";
import actGetProductsByItems from "./action/actGetProductsByItems";
import { TProducts, TLoading } from "src/types";
import isString from "../../types/guardForString";

interface ICartState {
    items:{[key:number]:number},
    productFullInfo: TProducts[]
    loading: TLoading,
    error: null | string
}

const initialState:ICartState = {
    items: {},
    productFullInfo: [],
    loading: "idle",
    error: null    
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id]++
            } else {
                state.items[id] = 1
            }
        },
        increaseProdQuantity: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id]++
            }
        },
        decreaseProdQuantity: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                if (state.items[id] !== 1) {
                    state.items[id]--
                } 
            }
        },
        removeCartItem : (state, action) => {
            delete state.items[action.payload]
            state.productFullInfo = state.productFullInfo.filter(el => el.id !== action.payload)
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByItems.pending, (state) => {
            state.error = null
            state.loading = "pending"
        })  

        builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
            state.error = null
            state.loading = "succeeded"
            state.productFullInfo = action.payload as TProducts[]
        })

        builder.addCase(actGetProductsByItems.rejected, (state, action) => {
            state.loading = "failed"
            if (isString(action.payload)) {
                state.error = action.payload
            }
        })
    }
})


export {getCartTotalQuantity};
export const {addToCart, increaseProdQuantity, decreaseProdQuantity, removeCartItem} = cartSlice.actions
export default cartSlice.reducer;