
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import CounterContext from "./CounterContext";
// import MyContext1 from './MyContext1.jsx';
import LoginContext from './LoginContext.jsx';
{/* <CounterContext>
    <App/>
</CounterContext> */}

// 25 Oct
//  <MyContext1>
//     <App/>
//     </MyContext1>
createRoot(document.getElementById('root')).render(
   
    <LoginContext>
     <App />
    </LoginContext>
)
