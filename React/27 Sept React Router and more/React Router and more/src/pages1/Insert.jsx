import { useState } from "react";



const Insert=()=>{
    const [input,setInput]=useState({});
    
const handleInput=(e)=>{
    let name =e.target.name;
    let value =e.target.value;
}
const handleSubmit=()=>{
    let api =""
}
    return(
        <>
         <h1>Insert records </h1>
         Enter Employee No : <input type="text" name="empno" onChange={handleInput}/> <br />
         Enter Employee Name : <input type="text" name="name" onChange={handleInput}/> <br />
         Enter Employee Email : <input type="text" name="email" onChange={handleInput}/> <br />
         Enter Employee Contact : <input type="text" name="contact" onChange={handleInput}/> <br />
         <button onClick={handleSubmit}>Save data</button>
        </>
    )
}
export default Insert;