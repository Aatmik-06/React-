import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="Home">Home</Link>   |
        <Link to="About">About</Link> |
        <Link to="Contact">Contact</Link>
        <hr size="4" color="blue"/>
        <Outlet/>
        <hr size="4" color="blue"/>
        www.mycompany.com
        </>
    )
}
export default Layout;