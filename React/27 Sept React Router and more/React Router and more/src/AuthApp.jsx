import { useState,useContext } from "react";
import { myloginContext } from "./LoginContext";
const AuthApp=()=>{
    const [username,setUsername ]=useState("");
    const {login}=useContext(myloginContext);
    return(
        <>
        Enter Name : <input type="text" value={username} 
        onChange={(e)=>{setUsername(e.target.value)}} /> <br /> <br />
        <button onClick={()=>{login(username)}}>Login</button>
        </>
    )
}
export default AuthApp;