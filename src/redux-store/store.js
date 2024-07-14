import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";

export const store = configureStore({
    reducer: {
        basket: cartSlice,
        user: null
    }
})