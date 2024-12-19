import {configureStore} from "@reduxjs/toolkit";
//SLICES 
import categorySlice from "@store/category/categorySlice"
import ProductsSlice from "@store/products/ProductsSlice"
import collectionSlice from "@store/getProductsByCollection/collectionSlice"
// import filterProductsSlice from "@store/filterProducts/filterProductSlice"

export const store = configureStore({
    reducer: {
        // your reducers
        category: categorySlice,
        products: ProductsSlice,
        collection: collectionSlice,
        // filtredProds: filterProductsSlice
    }
})


// Infer the RootState` and `AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;