import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import basketSlice from "./slice/basketSlice";



export const store = configureStore({
    reducer: {
        product: productSlice,
        basket: basketSlice
    }
})