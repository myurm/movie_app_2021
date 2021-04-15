import Axios from "axios";
import { all, call, put, take, fork } from "redux-saga/effects";
import { MainPageAction } from "./../slices/MainPage";

function apiMovieList() {
    return Axios.get(`localhost:3000/`);
}

function* asyncMovieList() {
    try{
        const rspn = yield call(apiMovieList);
        if(rspn.data.success) {
            
            if(rspn.data.list.length > 0) {
                yield put(MainPageAction.movieListSccs(rspn.data.list));
            } else {
                yield put(MainPageAction.movieListFail());
            }
        } else {
            yield put(MainPageAction.movieListError());
        }
    } catch(e) {
        yield put(MainPageAction.movieListError());
    }
}

function* watchMovieList() {
    while(true) {
        yield take(MainPageAction.movieList);
        yield call(asyncMovieList);
    }
}

export default function* MainPage(){
    yield all([fork(watchMovieList)]);
}