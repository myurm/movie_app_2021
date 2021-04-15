import { createSlice } from "@reduxjs/toolkit";

const name = "MainPage";

const initialState = {
    isLoading: true,
    movies: [],
};



const reducers = {
    // 3초 로딩
    loadingState: (state) => {
        state.isLoading = false;
    },
    movieList: () => {},
    movieListSccs: (data) => {
        console.log(data)
        alert("조회성공");
    },
    movieListFail: () => {
        alert("영화가 없습니다.");
    },
    movieListError: () => {
        alert("error");
    }
};

const MainPageSlice = createSlice({
    name,
    initialState,
    reducers
});

export const MainPageReducers = MainPageSlice.reducer;
export const MainPageAction = MainPageSlice.actions;