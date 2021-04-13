import { configureStore } from "@reduxjs/toolkit";
// ↑ 여기 안에 createStore도 포함되어 있음 (더 세심한 기능이라고 생각하면 됨)
// import { createStore } from 'redux'; <- redux-saga를 사용하기 때문에 필요없음
import logger from "redux-logger";
// ▲ 여러 미들웨어를 등록할 수 있고, 리덕스 관련 정보들을 console로 출력함
import createSagaMiddleware from "redux-saga";
// ▲ 미들웨어
import rootReducer from "./slices/rootSlice";
import history from "./utils/history";
import rootSaga from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware({
    context: {history: history}
    // context을 사용하면 이유는 어느 맥락에서 saga가 끼어들어야 하는지 알아야 되기 때문에 넣음
    // history를 넣은 이유는 saga에서 필요한 건 url이동에 필요한 history를 넣음
    // 여기에 넣은 건 오로지 saga를 위해서 넣은 거임!!
});
const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true, // 개발자 도구하고 연결할 거냐 묻는 거임
    preloadedState: initialState // state 초기화
});

sagaMiddleware.run(rootSaga);

export default store;