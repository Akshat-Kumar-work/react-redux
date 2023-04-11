const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value:0
}

//slice create kari hai createslice method se , aur slice ko export krdia hai
//CounterSlice ek variable hai jo store krta hai object jo return hoty hai createslice function se
export const CounterSlice = createSlice({
    //slice name
   // In Redux, a prefix is a string that is added to the beginning of an action type to 
  //  create a unique identifier for the action. The prefix helps to prevent naming collisions between actions defined in different parts of your application.
  //action type k agy use hota hai as a prefix jo differentiate krega actions m 
    name:"counter",
    
    //an object containing initial state value
    initialState, 

    //The reducers field in a slice is essentially a collection of these reducer functions that are combined together to create a larger reducer for the slice.
    reducers:{
        // reducer function and action creator 
        increment:(state)=>{
            state.value+=1;
        },
        // reducer function and action creator 
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
//CounterSlice.actions is an object that contains the action creators for the slice, including increment and decrement.
//reducer function ki implementation ko export kar rhe hai , yaha hum function ko export kar rhe hai
export const {increment, decrement} = CounterSlice.actions;


//CounterSlice.reducer is the actual reducer function that updates the state, 
export default CounterSlice.reducer;