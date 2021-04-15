import { map } from 'ramda';
import { all, fork } from "redux-saga/effects";
import MainPage from "./sagas/MainPage";


let combineSagas = {};
combineSagas = Object.assign(combineSagas, MainPage);

export default function* rootSaga() {
    yield all(map(fork, combineSagas));
}