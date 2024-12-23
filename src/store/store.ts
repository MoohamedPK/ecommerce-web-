import {configureStore} from "@reduxjs/toolkit";
//SLICES 
import categorySlice from "@store/category/categorySlice"
import ProductsSlice from "@store/products/ProductsSlice"
import collectionSlice from "@store/getProductsByCollection/collectionSlice"
import cartSlice from "@store/Cart/cartSlice"

// PERSISTOR 
import {persistReducer, persistStore, PERSIST, PURGE, FLUSH, PAUSE} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

const cartPersistConfig = {
    key:"root",
    storage,
    whiteList:["items"]
}

// root reducer
const rootReducer = combineReducers({
    // your reducers
    category: categorySlice,
    products: ProductsSlice,
    collection: collectionSlice,
    cart:persistReducer(cartPersistConfig, cartSlice),
})


const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [ PERSIST, PURGE, FLUSH, PAUSE]
            }
        })
})

// Infer the RootState` and `AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store)
export {store, persistor};