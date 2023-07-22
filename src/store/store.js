import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartslice"
const store=configureStore({
    reducer:{
       carts: cartreducer
    }
})
export default store;