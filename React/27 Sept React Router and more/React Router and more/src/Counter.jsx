import { myContext } from "./CounterContext";
import { useContext } from "react";
const Counter=()=>{
  const {cnt,setcnt}= useContext(myContext);

    return(
        <>
        <h1>Counter App</h1>
        <h1>{cnt}</h1>
        <button onClick={()=>{setcnt(cnt+1)}}>Increment</button>
        <button onClick={()=>{setcnt(cnt-1)}} >Decrement</button>
        </>
    )
}
export default Counter;