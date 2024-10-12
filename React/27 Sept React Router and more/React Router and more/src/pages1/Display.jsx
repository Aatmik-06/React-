import { useState ,useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [empdata, setempdata]=useState([]);
    const loadData=()=>{
        let url ="http://localhost:3000/Employee";
        axios.get(url).then((res)=>{
            console.log(res.data);
            setempdata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    const ans =empdata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.contact}</td>
            </tr>
            </>
        )
    })
    return(
    <>
     <h1>Display</h1>
     <table border="10px">
        <tr>
            <th>Emp Number</th>
            <th>Emp Name </th>
            <th>Emp Email</th>
            <th>Emp Contact</th>
        </tr>
        {ans}

     </table>
    </>
    
)}

export default Display;