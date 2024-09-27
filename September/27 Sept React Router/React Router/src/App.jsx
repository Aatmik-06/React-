import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx';
import NoPages from './Pages/NoPages.jsx'
const App=()=>{
  return(
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
          <Route path='Home' element={<Home/>}/> 
          <Route path='About' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path="*" element={<NoPages/>}/> 
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;