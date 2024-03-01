import React from "react";
// import useSelector
import { useSelector } from "react-redux";
// import useDispatch
import { useDispatch } from "react-redux";
// import action creator from cakeSlice
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
    // useSelector accepts function with state as parameter
    // the cake is the cakeReducer from the store and
    // the numberOfCakes is from the cakeSlice
    const numOfCakes = useSelector((state) => state.cake.numberOfCakes)
    // useDispatch returns a reference to the redux store
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
        </div>
    )
}