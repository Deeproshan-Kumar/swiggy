import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

const appStore = configureStore({
    reducer: cartSlice,
});

export default appStore;