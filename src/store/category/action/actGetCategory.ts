import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const actGetCategory = createAsyncThunk("category/actGetCategory", async(_, {rejectWithValue, signal}) => {

    try {
        const response = await axios.get("http://localhost:5005/category", {signal})
        return response.data

    } catch (error) {
        rejectWithValue(error)
    }
})

export default actGetCategory