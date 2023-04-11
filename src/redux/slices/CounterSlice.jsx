const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value:0
}

//slice create kari hai createslice method se , aur slice ko export krdia hai
export const CounterSlice = createSlice({
    //slice name
    name:"counter",
    //an object containing initial state value
    initialState, 

    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
    }
})

//createSlice method 2 chize deta hai action creator aur reducer
//reducers k andar sare functions hoty hai 
//action creator k andar reducer function ki implimentation hoti hai 
//agar sare reducers function ki implementation ko slice m se bhar nikalana hai toh actions se niklengy

//2 chize hamesha export krni hai

//function ki implementation ko export kar rhe hai
export const {increment, decrement} = CounterSlice.actions;


//reducer ko export kar rhe hai
export default CounterSlice.reducer;