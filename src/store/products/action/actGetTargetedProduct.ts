// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { TProducts } from "src/types";
// import axios from "axios";

// type TResponse = TProducts[]
// const actGetTargetedProduct = createAsyncThunk("product/actGetTargetedProduct", async(id:number,{rejectWithValue} ) => {

//     try {
//         const response = await axios.get<TResponse>(`http://localhost:5005/products?id=${id}`)
//         return response.data

//     } catch (error) {
//         rejectWithValue(error)
//     }

// })

// export default actGetTargetedProduct