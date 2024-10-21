import { useState } from "react";
import { createContext } from "react"

const myContext =createContext();
// children is a keyword
const CounterContext=({children})=>{
    const [cnt ,setcnt]=useState(0);
    return(
    <>
    <myContext.Provider value={{cnt,setcnt}}>
        {children}
    </myContext.Provider>
    </>
    )
}

export default CounterContext;
export {myContext}