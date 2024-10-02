// 27 Sept

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
//     <h1>Hello </h1>
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
//   //   alert("This is my Event")
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
//     alert("Name : "+Name +  "Value : "+val);
//   }
//   return(
//     <>
//     <h1>React Event Object</h1>
//     {/* e is called event e will give the name of event which is used like here onClick */}
//     <button name="btn1" value="mybtn" onClick={(e)=>{display("Aadi",e)}}>Click Here</button>
//     </>
//   )
// }



const App=()=>{
  const textBoxVal=(e)=>{
    let Name = e.target.name;
    let val = e.target.value;
    alert("Name : "+Name +  "Value : "+val);
  }
  return(
    <>
    <h1>React Event Object</h1>
    Enter City : <input type="text" name="city" value="Bhopal" onClick={textBoxVal} />
    </>
  )
}


export default App;

