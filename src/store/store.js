import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import darkmodeSlice from "./darkmodeSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        dark: darkmodeSlice,
        //TODO: add more slices here for posts
    },
});
export default store;
