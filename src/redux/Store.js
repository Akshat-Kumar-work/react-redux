import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

//to create global store , use configureStore function
const Store = configureStore( {
    reducer:{
        counter: CounterSlice
    },
})