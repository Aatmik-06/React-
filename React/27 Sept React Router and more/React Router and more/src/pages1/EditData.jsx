import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios";
const EditData=()=>{
    const {myid} =useParams();
    const [mydata, setMydata]=useState({}); // mydata={}
    const loadData=()=>{
      let api=`http://localhost:3000/Employee/${myid}`;
      axios.get(api).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
      })
    }
    useEffect(()=>{
        loadData();
    }, []);
    const handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setMydata(values=>({...values, [name]:value}))
          console.log(mydata);
    }
   const handleSubmit=(e)=>{ 
      e.preventDefault();
    let api=`http://localhost:3000/Employee/${myid}`;
    axios.put(api, mydata).then((res)=>{
        message.success("Data succesfully updated!!!");
        setMydata({
            empno:"",
            name:"",
            email:"",
            contact:""
        })
    })
   }
    return(
        <>
        <h1> Edit Employee Redcords :</h1>
        <form>
         Edit Employee no. <input type="text" name="empno" 
         value={mydata.empno} onChange={handleInput} />
         <br/>
         Edit Name <input type="text" name="name" 
         value={mydata.name} onChange={handleInput} />
         <br/>
         Edit Email <input type="text" name="email" 
         value={mydata.email}  onChange={handleInput}/>
         <br/>
         Edit Contact no. <input type="text" name="contact" 
         value={mydata.contact} onChange={handleInput} />
         <br/>
         <button onClick={handleSubmit}>Update!</button>
         </form>
        </>
    )
}
export default EditData;