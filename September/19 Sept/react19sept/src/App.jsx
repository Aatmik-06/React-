
// import College from "./college";
// import Student from "./student";

// const App=()=>{
//     return(
//         <>
//         <Student nm="Aadi" rno="55" ct="Bhopal"/>
//         </>
//     )
// }

// export default App;

// const clgname ="Buit";
// const st = "50";
// const add = "Bhopal";

// const App=()=>{
//     return (
//         <College clgname={clgname} st={st} add={add}/>
//     )
// }


// export default App;

// import Cybrom from "./cybrom"
// const Stu = {
//     "rollno":121,
//     "name":"Aadi",
//     "city":"Bhopal",
//     "fees":10000
// }

// const App=()=>{
//     return (
//         <>
//         <Cybrom 
//         stno={Stu.rollno}
//         stname={Stu.name}
//         stcity={Stu.city}
//         stfees={Stu.fees}
//         />
//         </>
//     )
// }
// export default Add;



// const App=()=>{
//     return(
//         <>
//         <h1 style={{color:"red",fontFamily:"arial",
//             textDecoration:"underline"}}>
//             Welcome to Cybrom
//         </h1>
//         <h2 style={{color:"blue",fontFamily:"sans-serif"}}>We are web developer</h2>
//         <div style={{color:"orange",fontSize:"20px"}}> Hello</div>
//         </>
//     )
// }


// const data={
//     color:"red",
//     fontFamily:"arial",
//     textDecoration:"underline"
// }

// const data1={
//     color:"blue",
//     fontFamily:"Arial"
// }
// const App=()=>{
//     return(
//         <>
//         <h1 style={data}>Welcome to Cybrom</h1>
//         <h2 style={data1}>We are developer</h2>
//         </>
//     )
// }

//  import Bhopal from "./Bhopal";
//  import Cybrom from "./cybrom";
// const App=()=>{
//     return(
//         <>
//         <h1 className="data">Welcome to Cybrom</h1>
//         <Bhopal/>
//         <Cybrom/>
//         </>
//     )
// }

// import Task from "./task";
// const App=()=>{
//     return(
//         <>
//         <Task/>
//         </>
//     )
// }


// Using React Bootstrap

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const App=()=>{
//     return(
//         <>
//       {/* <Navbar bg="warning" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Cybrom </Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">About</Nav.Link>
//             <Nav.Link href="#pricing">Services</Nav.Link>
//             <Nav.Link href="#pricing">Faculty</Nav.Link>
//             <Nav.Link href="#pricing">Contact</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar> */}
//       <img src={img1}/>
//         </>
//     )
// }

// 24 Sept 
// import img1 from "./images/r1.jpg";
// import img2 from "./images/r2.jpg";
// import img3 from "./images/r3.jpg";
// const App=()=>{
//     return(
//         <>
//       <img src={img1} height={"200px"}/> <br /> <br />
//       <img src={img2} height={"200px"}/> <br /> <br />
//       <img src={img3} height={"200px"}/>
//         </>
//     )
// }

// const App=()=>{
//   return(
//       <>
//       <h1></h1>
//       <img src="public/images/r1.jpg" height={"200px"}/>  <br /> <br />
//       <img src="public/images/r2.jpg" height={"200px"} /> <br /> <br />
//       <img src="public/images/r3.jpg" height={"200px"} />
//       </>
//   )
// }

// using react bootstrap for image slider 
// import img1 from "./images/r1.jpg";
// import img2 from "./images/r2.jpg";
// import img3 from "./images/r3.jpg";
// import Carousel from 'react-bootstrap/Carousel';


// const App=()=>{
//   return(
//       <>
//       <h1></h1>
//       <Carousel>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="First slide" /> */}
//         <img src={img1} height={"700px"} width={"100%"}/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="Second slide" /> */}
//         <img src={img2} height={"700px"}width={"100%"}/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="Third slide" /> */}
//         <img src={img3} height={"700px"}width={"100%"}/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//       </>
//   )
// }

// 25 Sept 

// import img1 from "./images/r1.jpg";
// import img2 from "./images/r2.jpg";
// import img3 from "./images/r3.jpg";
// import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const App=()=>{
//   return(
//       <>
//           <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>


//     <Carousel>
//        <Carousel.Item>
//          {/* <ExampleCarouselImage text="First slide" /> */}
//          <img src={img1} height={"200px"} width={"100%"}/>
//          <Carousel.Caption>
//            <h3>First slide label</h3>
//            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//          </Carousel.Caption>
//        </Carousel.Item>
//        <Carousel.Item>
//          {/* <ExampleCarouselImage text="Second slide" /> */}
//          <img src={img2} height={"200px"}width={"100%"}/>
//          <Carousel.Caption>
//            <h3>Second slide label</h3>
//            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//          </Carousel.Caption>
//        </Carousel.Item>
//        <Carousel.Item>
//          {/* <ExampleCarouselImage text="Third slide" /> */}
//          <img src={img3} height={"200px"}width={"100%"}/>
//          <Carousel.Caption>
//            <h3>Third slide label</h3>
//            <p>
//              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//            </p>
//          </Carousel.Caption>
//        </Carousel.Item>
//      </Carousel>
//       </>
//   )
// }

// export default App;



// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const App=()=>{
//   return(
//       <>
//       <Container fluid>
//       <Row>
//         <Col className='bg-success' style={{width:"10px"}}>1 of 1</Col>
//         <Col className='bg-warning'>1 of 1</Col>
//         <Col className='bg-light'>1 of 1</Col>
//         <Col className='bg-primary'>1 of 1</Col>
//       </Row>
//       <Row>
//       <Col className='bg-secondary'>1 of 1</Col>
//       <Col className='bg-danger'>1 of 1</Col>
//       </Row>
//     </Container>
//       </>
//   )
// }

// const App=()=>{
//   return(
//       <>
//       <Container >
//       {/* <Row>
//         <Col md={2} className='bg-success'>1 of 1</Col>
//         <Col md={2} className='bg-primary'>1 of 1</Col>
//         <Col md={4} className='bg-secondary'>1 of 1</Col>
//         <Col md={4} className='bg-warning'>1 of 1</Col>
//       </Row>
//       <Row>
//         <Col md={2} className='bg-danger'>1 of 1</Col>
//         <Col md={4} className='bg-dark'>1 of 1</Col>
//         <Col md={3} className='bg-light'>1 of 1</Col>
//         <Col md={3} className='bg-success'>1 of 1</Col>
//       </Row> */}
//       <Row>
//         <Col md={1} className='bg-danger'>1 of 1</Col>
//         <Col md={2} className='bg-dark'>1 of 1</Col>
//         <Col md={4} className='bg-light'>1 of 1</Col>
//         <Col md={5} className='bg-success'>1 of 1</Col>
//       </Row>
//       <br />
//       <Row>
//         <Col md={2} className='bg-danger'>1 of 1</Col>
//         <Col md={2} className='bg-dark'>1 of 1</Col>
//         <Col md={4} className='bg-primary'>1 of 1</Col>
//         <Col md={2} className='bg-secondary'>1 of 1</Col>
//         <Col md={2} className='bg-success'>1 of 1</Col>
//       </Row>
//     </Container>
//       </>
//   )
// }



// 26 Sept
// import Topmenu from './components/Topmenu.jsx';
// import Banner from './components/banner.jsx';
// import Container from 'react-bootstrap/Container';
// import Cards  from './components/Cards.jsx';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Layout from './Layout.jsx';


// const App=()=>{
//   return(
//       <>
//        <Container>
//         <Topmenu/>
//         <Banner/>
//         <Cards/>
//        </Container>
//       </>
//   )
// }

// 27 Sept
// React Router 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './Pages/About.jsx';
const App=()=>{
  return(
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<About/>}/>
          <Route path='/' element={<Contact/>}/>


        </Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;