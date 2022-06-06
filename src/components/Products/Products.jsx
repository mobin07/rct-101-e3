import React from "react";
import { useState } from "react";


import { useEffect } from "react";
import axios from "axios"
import Product from "./Product/Product";
import "./Products.css"

const Products = () => {
  const [users,setUsers]=useState([]);
  // console.log(users)
   
  useEffect(()=>{
      axios.get(" http://localhost:8080/products").then(({data})=>{
       
          setUsers(data);
      })


  },[])
return (
  <div className="box1">
       {users.map((user)=>(
          <div key={user.id}>
           <Product user={user} ></Product>  
          </div>
      )
  )}
  </div>
)
};

export default Products;