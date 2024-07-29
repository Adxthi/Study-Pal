import {useSelector,useDispatch} from "react-redux";
//import { increment, decrement } from "./Action";
export default function CounterApp(){
    const count =useSelector((state)=>state.count);
    const dispatch=useDispatch();
    return(
        <div>
        <h3>redux application</h3>
        <h4>count: {count}</h4>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>decrement</button>
        </div>
    )
}