import { AuthContext } from '../context/AuthContext';
import React,{useContext} from 'react'
import { Navigate} from 'react-router-dom';



const RequiredAuth = ({ children }) => {
  // return children;
  const {isAuth}=useContext(AuthContext)
  // const {pathname} =useLocation();
  // console.log(location,location.pathname);
  if(isAuth){
    return  children;
  }
  else{ 
    return < Navigate to="/login"  />
  }
};

export default RequiredAuth;
