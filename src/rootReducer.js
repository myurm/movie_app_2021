import { combineReducers } from 'redux';
import { MainPageReducers } from "./slices/MainPage";

const rootReducer = combineReducers({ MainPageReducers });

export default rootReducer;