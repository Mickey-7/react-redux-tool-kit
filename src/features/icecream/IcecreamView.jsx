import React, { useState } from "react";
// import useSelector to display data from store
import { useSelector } from "react-redux";
// import useDispatch
import { useDispatch } from "react-redux";
// import action creator from icecreamSlice
import { ordered,restocked } from "./icecreamSlice";

export const IcecreamView = () => {
    // useSelector accepts function with state as parameter
    // the cake is the cakeReducer from the store and
    // the numberOfIcecreams is from the icecreamSlice
    const numIcecream = useSelector((state) => state.icecream.numberOfIcecreams)
    // useDispatch returns a reference to the redux store
    const dispatch = useDispatch()

    //if user wants to restock via input value
    const [value,setValue] = useState(1)
    //value on input element has not to be part of redux store
    //if something is not needed outside the component
    //it can stay as local state to not complicate the redux store
    return(
        <div>
            <h2>Number of icecreams - {numIcecream}</h2>
            <button onClick={() => dispatch(ordered())}>Order icecream</button>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(restocked(value))}>Restock icecreams</button>
        </div>
    )
}