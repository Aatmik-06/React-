import { createContext, useState } from "react";

const colorContext = createContext();

const MyContext1=({children})=>{
    const [clr,setclr]=useState("blue");
    return(
        <>
        <colorContext.Provider value={{clr,setclr}}>
        {children}
        </colorContext.Provider>
        </>
    )
}
export {colorContext};
export default MyContext1;