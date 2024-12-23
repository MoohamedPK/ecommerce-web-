import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axios from "axios";
import { TProducts } from "src/types";

type TResponse = TProducts[]

const actGetProductsByItems = createAsyncThunk("cart/actGetProductsByItems", async(_, {rejectWithValue, getState, fulfillWithValue}) => {

    const {cart} = getState() as RootState
    const itemsId = Object.keys(cart.items)

    if (!itemsId.length) {
        
        return fulfillWithValue([])
    }
    
    try {
        const concatenatedItemsId = itemsId.map((item) => `id=${item}`).join("&")
        const response = await axios.get<TResponse>(`http://localhost:5005/products?${concatenatedItemsId}`)
        return response.data
        
    } catch (error) {
        rejectWithValue(error)
    }
})


export default actGetProductsByItems










