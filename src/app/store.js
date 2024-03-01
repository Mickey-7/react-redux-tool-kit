import  cakeReducer  from "../features/cake/cakeSlice";
import  icecreamReducer  from "../features/icecream/icecreamSlice";
import  userReducer  from "../features/user/userSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    }
})

export default store
