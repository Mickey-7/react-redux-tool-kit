import React from "react";
// import useEffect
import { useEffect } from "react";
// import useDispatch
import { useDispatch, useSelector } from "react-redux";
// import fetcUsers from userSlice
import { fetchUsers } from "./userSlice";

export const UserView = () => {
    //get data from store to be rendered
    const user = useSelector(state => state.user)
    //dispatch an action from userSlice
    const dispatch = useDispatch()
    //useEffect - first argument is a function
    //and run only once so we use [] as dependency
    useEffect(() => {
      dispatch(fetchUsers())
    },[])
    return(
        <div>
            <h2>List of users</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div>:null}
            {!user.loading && user.users.length ?
                (
                    <ul>
                        {
                            user.users.map(user => (
                                <li key={user.id}>{user.name}</li>
                            ))
                        }
                    </ul>
                )
                :
                null
            }
        </div>
    )
}