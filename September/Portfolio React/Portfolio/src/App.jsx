
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topmenu from './Components/Topmenu';
import Home from './Components/Home';
import About from './Components/About';
const App=()=>{
  return(
      <>
       <Container className='c1' fluid>
        <Topmenu/>
        <Home/>
        <About/>
       </Container>
      </>
  )
}

export default App;