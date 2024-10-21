
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import CounterContext from "./CounterContext";
import MyContext1 from './MyContext1.jsx';

{/* <CounterContext>
    <App/>
</CounterContext> */}
createRoot(document.getElementById('root')).render(
    <MyContext1>
    <App/>
    </MyContext1>
)
