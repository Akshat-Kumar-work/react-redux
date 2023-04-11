const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value:0
}

//slice create kari hai createslice method se , aur slice ko export krdia hai
export const CounterSlice = createSlice({
    name:"counter",
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
//agar sare reducers function ki implementation ko slice m se bhar nikalana hai toh actions se niklengy
//function ki implementation ko export kar rhe hai
export const {increment, decrement} = CounterSlice.actions;


//reducer ko export kar rhe hai
export default CounterSlice.reducer;