import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import axiosErrorHandler from "src/util/axiosErrorHandler/AxiosErrorHandler";
import { TCategory } from "@types";

type TResponse = TCategory

const actGetCategory = createAsyncThunk("category/actGetCategory", async(_, {rejectWithValue, signal}) => {

    try {
        const response = await axios.get<TResponse>("http://localhost:5005/category", {signal})
        return response.data

    } catch (error) {
        rejectWithValue(axiosErrorHandler(error))
    }
})

export default actGetCategory