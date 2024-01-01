import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeMode: "light",
};

const darkmodeSlice = createSlice({
    name: "dark",
    initialState,
    reducers: {
        darkHandler: (state) => {
            state.themeMode = "dark";
        },
        lightHandler: (state) => {
            state.themeMode = "light";
        },
    },
});

export const { darkHandler, lightHandler } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
