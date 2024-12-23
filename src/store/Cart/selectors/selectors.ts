import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

const getCartTotalQuantity = createSelector((state:RootState) => state.cart.items, (items) => {
    
        const itemsQuantity = Object.values(items).reduce((curr, acc) => {
        return curr + acc
        },0)
    
        console.log(itemsQuantity)
        return itemsQuantity
})

export {getCartTotalQuantity}