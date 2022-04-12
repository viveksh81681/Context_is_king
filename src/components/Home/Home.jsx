import { Link } from "react-router-dom"
import "./Home.css"
export const Home=()=>{
    return <div>
    <div className="link">
        <Link to="registration/one" >Go to registartion</Link>
        <Link to="/users" >Users</Link>
    </div>
    <div>
         <h2>Home page</h2>
    </div>
    </div>
}