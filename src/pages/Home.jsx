import React,{useContext} from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Products from "../components/Products/Products";
import "./home.css"




const Home = () => {
  // const {isAuth}=useContext(AuthContext)
 
  const [state, dispatch] = useContext(AuthContext);
  return(
     <div>
    <div className="move">
    <Link to="/">logo</Link>
    <div>Cart:(1) 
      <button >{state.isAuth?"Login":"Logout"}</button>
    </div>
    </div>
    {state.isAuth?<Products/>:<Login/>}
    
  
  </div>
  )
};

export default Home;
