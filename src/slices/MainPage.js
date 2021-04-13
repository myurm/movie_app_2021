import { createSlice } from "@reduxjs/toolkit";

const name = "MainPage";

const initialState = {
    isLoading: true,
};

const reducers = {

};

const MainPageSlice = createSlice({
    name,
    initialState,
    reducers
});

export const MainPageReducers = MainPageSlice.reducer;
export const MainPageActions = MainPageSlice.actions;