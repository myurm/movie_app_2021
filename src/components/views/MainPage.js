import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MainPageAction } from '../../slices/MainPage';

function MainPage () {
    const dispatch = useDispatch();

    // state
    const isLoading = useSelector((state) => state.MainPageReducers.isLoading);

    // event
    function loadingCount() { // 3초 후 로딩 끝!
        setTimeout(() => {
            dispatch(MainPageAction.loadingState())
        }, 1000)
    }

    // init
    useEffect(() => {
        if(isLoading === true) {
            loadingCount();
            dispatch(MainPageAction.movieList());
        }
    }, []);

    return (
        <>
            <p>{isLoading === true ? "Loading . . ." : "무비"}</p>
        </>
    )
}

export default MainPage;