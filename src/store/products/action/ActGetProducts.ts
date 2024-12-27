import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import axiosErrorHandler from "src/util/axiosErrorHandler/AxiosErrorHandler";
import { TProducts } from "src/types";

type TResponse = TProducts[]

const actGetProducts = createAsyncThunk("products/actGetProducts", async(prefix: string | null, {rejectWithValue, signal}) => {

    try {
        const endPoint = prefix ? `http://localhost:5005/products?cat_prefix=${prefix}` : `http://localhost:5005/products`;
        
        const response = await axios.get<TResponse>(endPoint, {signal})
        return response.data

    } catch (error) {
        rejectWithValue(axiosErrorHandler(error))
    }
})

export default actGetProducts;


// the idea of all products ==>  if you have the prefix get the prods with the prefix if you don't get all prods