import { useContext , useState } from "react";
import { colorContext } from "./MyContext1";


const BgColor=()=>{
    const {clr, setclr} = useContext(colorContext);
    const [txtval,settxtval]=useState("");
    return(
        <>
        <h1>Context Api</h1>
        <h1>Change background Color</h1>
       Enter any color: <input type="text" value={txtval} 
        onChange={(e)=>{settxtval(e.target.value)}} />
        <button onClick={()=>{setclr(txtval)}}>Change Color</button>
        <div style={{width:"200px", height:"200px" ,backgroundColor:clr}}></div>
        </>
    )
}
export default BgColor;