import { Link, Outlet } from "react-router-dom";
const Layout1=()=>{
    return(
        <>
        <Link to="home">Home</Link>   |
        <Link to="insert">Insert</Link> |
        <Link to="display">display</Link> |
        <Link to="search">Search</Link>|
        <Link to="addemp">Updata Data</Link>
        <hr size="4" color="red"/>
        <Outlet/>
        <hr size="4" color="red"/>
        </>
    )
}
export default Layout1;