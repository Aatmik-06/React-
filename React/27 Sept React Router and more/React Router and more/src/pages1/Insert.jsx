import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input,setInput]=useState({});
    
const handleInput=(e)=>{
    let name =e.target.name;
    let value =e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input);
}
const handleSubmit=()=>{
    let api ="http://localhost:3000/Employee";
    axios.post(api,input).then((res)=>{
        console.log(res);
        alert("Data Successfully Saved !!!");
    })
    
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