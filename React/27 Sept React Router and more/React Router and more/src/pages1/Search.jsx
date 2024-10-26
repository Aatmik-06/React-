import { useState } from "react";
import axios from "axios";
const Search=()=>{
    const [empname, setempname]=useState("");
    const [mydata ,setmydata]=useState([]);
    const handleChange=(e)=>{
        let ename=e.target.value;
        setempname(ename);
        let api ='http://localhost:3000/Employee';
        axios.get(api).then((res)=>{
            setmydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
        let str = key.name.toLowerCase();
        let mystatus = str.includes(empname.toLowerCase());
        console.log(mystatus);
        if(mystatus)
        {
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
        }
    })
    
    if(handleChange.value!=" "){
        return(
            <>
            <h1>Search Employee Records </h1>
            Type Emp Name <input type="text" value={empname} onChange={handleChange} />
            <hr />
            <table border="10px">
                <tr>
                    <th>Emp No.</th>
                    <th>Emp Name</th>
                    <th>Emp Email</th>
                    <th>Contact</th>
                </tr>
                {ans}
            </table>
            </>
        )
   }
}

export default Search




// import { useState } from "react";
// import axios from "axios";
// const Search=()=>{
//     const [ename, setEname]=useState("");
//     const [mydata, setMydata]=useState([]);
//     const handleChange=(e)=>{
//         let empname= e.target.value;
//         setEname(empname);
//         let api=`http://localhost:3000/Employee`;
//         axios.get(api).then((res)=>{
//             setMydata(res.data);
//             console.log(res.data);
//         })
//     }
//     const ans=mydata.map((key)=>{
//           let str= key.name;
//            let mystatus=str.includes(ename);
//            console.log(mystatus);
//          if (mystatus)
//             {  
//           return(
//             <>
//              <tr>
//               <td> {key.empno}</td>
//               <td>  {key.name} </td>
//               <td> {key.email} </td>
//               <td>  {key.contact}</td>
//               </tr>
//             </>
//           )
//         }
//     })

//     return(
//         <>
//           <h1> Search Employee Records</h1>
// Type Emp Name  : <input type="text" value={ename} onChange={handleChange} />
          
//           <hr size="5" color="green"/>
//           <table>
//             <tr>
//                 <th> Emp No</th>
//                 <th> Name</th>
//                 <th> Email</th>
//                 <th>Contact</th>
//             </tr>
//             {ans}
//           </table>
//         </>
//     )
// }
// export default Search;