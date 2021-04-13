import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import MainPageActions from '../../slices/MainPage';

function MainPage () {
    const dispatch = useDispatch();

    // state
    const isLoading = useSelector((state) => state.MainPageReducers.isLoading);

    // event
    const isLoadingCount = () => {
        setTimeout({isLoading: false}, 3000);
    }
    // init

    return (
        <>
            <p>{isLoading ? "Loading ... " : "We are ready"}</p>
        </>
    )
}

export default MainPage;