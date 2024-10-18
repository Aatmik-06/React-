import { useContext } from "react";
import {userContext} from "./App";

const ContextEgComp=()=>{
    const {user,setuser} = useContext(userContext);
    return(
        <>
        <h1>Welcome Context: {user}</h1>
        <button onClick={()=>{setuser("John")}}>Click Here</button>
        </>
    )
}

export default ContextEgComp;