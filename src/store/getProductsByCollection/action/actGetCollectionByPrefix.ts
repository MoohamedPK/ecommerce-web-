import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "src/types";


const actGetCollectionByPrefix = createAsyncThunk("collection/actGetCollectionByPrefix", async(_, {rejectWithValue, signal}) => {
    try {

        const response = await axios.get<TProducts>(`http://localhost:5005/latest_collection`, {signal})
        return response.data
        
    } catch (error) {
        rejectWithValue(error)
    }
})

export default actGetCollectionByPrefix;