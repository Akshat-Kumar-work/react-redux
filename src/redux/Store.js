import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

//to create global store in which centeralized data is present , use configureStore method
const Store = configureStore( {
    reducer:{
        //slice name    slice
        counter: CounterSlice
    },
}) 

export default Store;