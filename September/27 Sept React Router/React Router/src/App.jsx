// 27 Sept

import { useState } from "react";

// Command for installing react router

// npm i react-router-dom

// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from './Layout.jsx';
// import Home from './Pages/Home.jsx'
// import Contact from './Pages/Contact.jsx'
// import About from './Pages/About.jsx';
// import NoPages from './Pages/NoPages.jsx'
// const App=()=>{
//   return(
//       <>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//          <Route index element={<Home/>}/>
//           <Route path='Home' element={<Home/>}/> 
//           <Route path='About' element={<About/>}/>
//           <Route path='Contact' element={<Contact/>}/>
//           <Route path="*" element={<NoPages/>}/> 
//         </Route>
//       </Routes>
//       </BrowserRouter>
//       </>
//   )
// }


// 28 Sept


// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from './Layout.jsx';
// import Home from './Pages/Home.jsx'
// import Contact from './Pages/Contact.jsx'
// import About from './Pages/About.jsx';
// import NoPages from './Pages/NoPages.jsx'
// import AboutCompany from "./Pages/AboutCompany.jsx";
// const App=()=>{
//   return(
//       <>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home/>}/>
//           <Route path='home' element={<Home/>}/> 
//             <Route path='about' element={<About/>}> 
//               <Route path="aboutcompany" element={<AboutCompany/>}/>
//               <Route path="aboutproduct" element={<AboutProduct/>}/>
//             </Route>
//           <Route path='contact' element={<Contact/>}/>
//           <Route path="*" element={<NoPages/>}/> 
//         </Route>  
//       </Routes>   
//       </BrowserRouter>
//       </>
//   )
// }


// 30 Sept react Lists or map

// const good = ["name","Hello","World","luck"];

// this method is not used currently 

// const App=()=>{
// const abx=good.map((key)=>{
//       return(
//         <>
//         <h1> {key} </h1>
//         </>
//       )
//     })
//     return(
//       <>
//       <h1>Hello World !!!</h1>
//       {abx}
//       </>
//     )
// }

// This is highly used 
// const App=()=>{
//   // we are using arrow function 
//   const subject = ["Php" , "Oracle" ,"Java" ,"Python"];
  // const ans =subject.map((key)=>{
  //   return(
  //     <>
  //      <li>{key}</li>
  //     </>
  //   )
  // })

  // if we will have to do map in one line so 
  // 1st method 
  // const ans =subject.map((key)=><li>{key}</li>)

  // 2nd method 
  // if we have only one argument so we can skip brackets also 
  // const ans =subject.map(key=><li>{key}</li> )

  // also we can use traditional function but we will use arrow function beacuse it is new and now used 

  // Our data will be stored in the form of array of object 
//   return(
//     <>
//     <h1>Hello World /h1>
//     <ol>
//      {ans}
//     </ol>
//     </>
//   )
// }
// export default App;





// const App=()=>{
//   const student =[
//     {
//       "rollno":101,
//       "name":"Aadi",
//       "city":"bhopal"
//     },
//     {
//       "rollno":102,
//       "name":"Safal",
//       "city":"Indore"
//     },
//     {
//       "rollno":103,
//       "name":"good",
//       "city":"Jabalpur"
//     },
//     {
//       "rollno":104,
//       "name":"Hello",
//       "city":"Jabalpur"
//     }
//   ]
  
// // we can access data of array of object by
// // console.log(student[1].name)

//   const ans =student.map((key)=>{
//     return(
//       <>
//       <tr>
//         <td>{key.rollno}</td>
//         <td>{key.name}</td>
//         <td>{key.city}</td>
//       </tr>
//       </>
//     )
//   })

//   return(
//     <>
//     <h1>Hello </h1>
//     <table border={"1px"}>
//       <tr>
//         <th>Roll No</th>
//         <th>Name</th>
//         <th>City</th>
//       </tr>
//       {ans}
//     </table>
//     </>
//   )
// }




// 01 October



// const App=()=>{
//   const student =[
//     {
//       "rollno":101,
//       "name":"Aadi",
//       "city":"bhopal"
//     },
//     {
//       "rollno":102,
//       "name":"Safal",
//       "city":"Indore"
//     },
//     {
//       "rollno":103,
//       "name":"Amit",
//       "city":"Jabalpur"
//     },
//     {
//       "rollno":104,
//       "name":"Anjali",
//       "city":"Jabalpur"
//     }
//   ]
//   const ans = student.map((key)=>{
//     return(
//             <>
//             <tr>
//               <td>{key.rollno}</td>
//               <td>{key.name}</td>
//               <td>{key.city}</td>
//             </tr>
//             </>
//           )
//       })

//   return(
//     <>
//     <h1>Hello</h1>
//     <table>
//       <th>Roll No</th>
//       <th>Name</th>
//       <th>City</th>
//       {ans}
//     </table>
//     </>
//   )
// }

// Making design of table in another jsx file

// import Design from "./Design"

// const App=()=>{
//   const student =[
//     {
//       "rollno":101,
//       "name":"Aadi",
//       "city":"bhopal"
//     },
//     {
//       "rollno":102,
//       "name":"Safal",
//       "city":"Indore"
//     },
//     {
//       "rollno":103,
//       "name":"Amit",
//       "city":"Jabalpur"
//     },
//     {
//       "rollno":104,
//       "name":"Anjali",
//       "city":"Jabalpur"
//     }
//   ]
//   const ans = student.map((key)=><Design rno={key.rollno} nm={key.name} ct={key.city} />)

//   return(
//     <>
//     <h1>Hello</h1>
//     <table border="1px">
//       <tr>
//       <th>Roll No</th>
//       <th>Name</th>
//       <th>City</th>
//       </tr>
//       {ans}
//     </table>
//     </>
//   )
// }

// Making design and data in another jsx file

// import EmpData from "./EmpData";
// import EmpDesign from "./EmpDesign";

// const App=()=>{
//   const ans = EmpData.map((key)=><EmpDesign eno={key.empno} enm={key.empname} edct={key.empcity} esal={key.empsalary} />)
//   return(
//     <>
//     <h1>Hello</h1>
//     <table border="1px">
//       <tr>
//       <th>Emp No</th>
//       <th>Name</th>
//       <th>City</th>
//       <th>Salary</th>
//       </tr>
//       {ans}
//     </table>
//     </>
//   )
// }


// 02 Oct

// React Events 


// const App=()=>{

//   // const display=()=>{
//   //   alert("This is my React Event")
//   // }

//   // function using arguments
//   const display=(nm)=>{
//       alert(`my name is : ${nm}`)
//     }
//   return(
//     <>
//     <h1>React Events </h1>
//     {/* Display is an function and we donot have to write parenthrsis () in React but when we have to write arguments in function so () is used */}
//     {/* <button onClick={display}>Click Here</button>  */}
//     {/* we have to write onCLick in camel case  */}

//     {/* if function is having arguments so we have to pass function in arrow function */}
//     <button onClick={()=>{display("Aatmik Kushwaha")}}>Show name</button> 
//     </>
//   )
// }


// React Event Object

// const App=()=>{
//   const display=(course,e)=>{
//     alert(`My Course : ${course}    event object: ${e.type}`);
//   }
//   return(
//     <>
//     <h1>React Event Object</h1>
//     {/* e is called event e will give the name of event which is used like here onClick */}
//     <button onClick={(e)=>{display("FullStack",e)}}>Click Here</button>
//     </>
//   )
// }


// we have to use Event Object  
// const App=()=>{
//   const display=(nm,e)=>{
//     // alert(e.target.name);
//     let Name = e.target.name;
//     let val =e.target.value;
//     alert("Name : "+Name +  "value : "+val);
//   }
//   return(
//     <>
//     <h1>React Event Object</h1>
//     {/* e is called event e will give the name of event which is used like here onClick */}
//     <button name="btn1" value="mybtn" onClick={(e)=>{display("Aadi",e)}}>Click Here</button>
//     </>
//   )
// }



// const App=()=>{
//   const textBoxVal=(e)=>{
//     let Name = e.target.name;
//     let val = e.target.value;
//     alert("Name : "+Name +  "Value : "+val);  
//   }
//   return(
//     <>
//     <h1>React Event Object</h1>
//     Enter City : <input type="text" name="city" value="Bhopal" onClick={textBoxVal} />
//     </>
//   )
// }


// 03 Oct
// React Hooks

// React use state hook

// React Forms

// import { useState } from "react";

// const App=()=>{
//   const [name,setName]=useState("Aadi");  // set is an method 
//   // const myname=()=>{
//   //   setName("Aatmik")
//   // }
//   return(
//     <>
//     <h1>React Forms | React use state hook </h1>
//     <h1>Name :{name}</h1>
//     {/* <button onClick={myname}>Change name</button> */}
//     {/* or */}
//     <button onClick={()=>{setName("Hello")}}> click</button>
//     </>
//   )
// }



// const App=()=>{
//   const [color,setColor]=useState("red");  // set is an method 
//   return(
//     <>
//     <h1>React Forms | React use state hook </h1>
//     <h1 style={{color:color}} >Favourite Color :{color}</h1>
//     <button onClick={()=>{setColor("Green")}}>Green</button>
//     <button onClick={()=>{setColor("Blue")}}>Blue</button>
//     <button onClick={()=>{setColor("Yellow")}}>Yellow</button>
//     <button onClick={()=>{setColor("orange")}}>Orange</button>
//     </>
//   )
// }



// Counter in React

// const App=()=>{
//   const [cnt,setcnt]=useState(0);

//   const myDecrement=()=>{
//     if(cnt<1){
//       alert("Not Allowed")
//     }
//     else {
//       setcnt(cnt-1);
//     }
//   }
//   return(
//     <>
//     <center>
//     <h1>Counter App</h1>
//     <h1>Count : {cnt}</h1>
//     <button onClick={()=>{setcnt(cnt+1)}}>Increment</button>
//     {/* <button onClick={()=>{setcnt(cnt-1)}}>Decrement</button> */}
//     <button onClick={myDecrement}>Decrement</button>
//     <button onClick={()=>{setcnt(0)}}>Reset</button>
//     </center>
//     </>
//   )
// }


// 04 Oct
// React Use Effect Hook
// import { useEffect, useState } from "react";
// const App=()=>{

//   const [cnt,setcnt]=useState(0);

//   // useEffect(()=>{
//   //   setcnt(cnt+1);
//   // })

//   // we can use settimeout to slow it 
//   useEffect(()=>{
//     setTimeout(()=>{
//      setcnt(cnt+1)
//     },2000);
//   })
//   return(
//     <>
//     <h1>React useEffect Hook :{cnt}</h1>
//     </>
//   )
// }



// import { useEffect, useState } from "react";
// const App=()=>{

//   const [cnt,setcnt]=useState(0);
//   // useEffect(()=>{
//   //   setcnt(cnt+1);
//   // })

//   // we can use settimeout to slow it 
//   useEffect(()=>{
//     setTimeout(()=>{
//      setcnt(cnt+1)
//     },2000);
//   },[])  // when  use take an empty array[] so it will run on one render only means it will run only one time 
//   return(
//     <>
//     <h1>React useEffect Hook :{cnt} </h1>
//     </>
//   )
// }




// import { useEffect, useState } from "react";
// const App=()=>{

//   const [cnt,setcnt]=useState(0);
//   const [multi,setMulti]=useState(0);
//   // useEffect(()=>{
//   //   setcnt(cnt+1);
//   // })

//   // we can also change dependency  
//   useEffect(()=>{
//     setMulti(cnt*2);
//   },[cnt])  
//   return(
//     <>
//     <h1>React useEffect Hook </h1>
//     <h1>Count :{cnt}</h1>
//     <h1>Multiplication :{multi}</h1>
//     <button onClick={()=>{setcnt(cnt+1)}}>Click Here</button>
//     </>
//   )
// }



// React Forms

// import { useEffect, useState } from "react";
// const App=()=>{

//   const [name,setName]=useState("")
//   const [city,setCity]=useState("")
//   return(
//     <>
//     <center>
//     <h1>React Forms </h1>
//     Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />
//     Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/> <br />
//     <button>Submit</button>
//     </center>
//     </>
//   )
// }


// 05 oct 

// React Forms

// const App=()=>{

//   const [name,setName]=useState("");
//   const [city,setCity]=useState("");
//   const handleSubmit=()=>{
//     console.log("student name:"+name,"student city:"+city);
//   }
//   return(
//     <>
//     <center>
//       <h1>React Forms </h1>
//       Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> 
//       <br />
//       Enter City: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} /> 
//       <br />
//       <button onClick={handleSubmit}>Submit </button>
//     </center>
   
//     </>
//   )
// }



// For Multiple input fields we can use spread operator (...) 
// const App=()=>{

//   const [input,setInput]=useState({});
//   const inputHandle=(e)=>{
//     let name = e.target.name;
//     let value =e.target.value;
//     // console.log({[name]:value});
//     // setInput({[name]:value});
//     setInput((values)=>({...values,[name]:value}));  
//   } 

//   const handleSubmit=()=>{
//     console.log(input);
       
//    }
//   return(
//     <>
//     <center>
//      <h1>React Forms </h1>
//      Enter Name: <input type="text" name="name" value={input.stuname} onChange={inputHandle} />   
//      <br />
//      Enter City: <input type="text" name="city " value={input.city} onChange={inputHandle} />    
//      <br />
//      Enter Contact: <input type="text" name="contact" value={input.contact} onChange={inputHandle} /> 
//      <br />
//      Enter Email: <input type="text" name="email" value={input.email} onChange={inputHandle} /> 
//      <br />
//      <button onClick={handleSubmit}>Submit</button>
//     </center>
//     </>
//   )

// }



// 07 Oct 

const App=()=>{

  const handleSubmit=()=>{
    console.log(input);
       
   }
  return(
    <>
    <center>
     <h1>React Forms </h1>
     Enter Name: <input type="text" name="name" value={input.stuname} onChange={inputHandle} />   
     <br />
     Enter City: <input type="text" name="city " value={input.city} onChange={inputHandle} />    
     <br />
     Enter Contact: <input type="text" name="contact" value={input.contact} onChange={inputHandle} /> 
     <br />
     Enter Email: <input type="text" name="email" value={input.email} onChange={inputHandle} /> 
     <br />
     <button onClick={handleSubmit}>Submit</button>
    </center>
    </>
  )

}

export default App;

