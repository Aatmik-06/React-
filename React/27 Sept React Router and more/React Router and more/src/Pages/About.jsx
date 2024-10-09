

import { Link,Outlet } from "react-router-dom";


const About=()=>{
    return(
        <>
        <h1>About Page</h1>
        <Link to="aboutcompany">About Company</Link>
        <Link to="aboutprouct">About Product</Link>
        <Outlet/>
        </>
    )
}
export default About;