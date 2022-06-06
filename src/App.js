
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequiredAuth from "./hoc/RequiredAuth"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./components/Products/Products"
import Product from "./components/Products/Product/Product"


function App() {
  return (
    <div className="App">
      
      {/* <Home/> */}
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login />} />
       <Route path="/products/*" element={
       <RequiredAuth>
       <Products />
       </RequiredAuth>
       }/>
       <Route path=":id" element={
       <RequiredAuth>
       <Product />
       </RequiredAuth>
       }/>

       {/* <Route path="/cartItems" element={
       <RequiredAuth>
       <CartItems />
       </RequiredAuth>
       }/> */}

      </Routes>

    </div>
  );
}

export default App;
