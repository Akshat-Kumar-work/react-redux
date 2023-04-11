import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

const Counter = ()=>{
    //to fetch data from any slice use selector is used
    const count = useSelector((state)=>state.counter.value)

    //to call any reducer function usedispatch hook is used
    const dispatch = useDispatch()


return(
     <div>
        <button onClick={()=> dispatch(increment())}>increment</button>
        <br></br>
        <div>
            {count}
        </div>
        <br></br>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
     </div>
)
}
export default Counter;
