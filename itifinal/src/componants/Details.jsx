import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Products } from "./Products";

export function Details() {

  let {id} =useParams();

 let [product, set] = useState({})

useEffect(()=>{
      axios.get(`http://localhost:3006/products/${id}`).then((response)=>{
              set(response.data)
      }).catch((error)=>{
        console.log(error)
      })
},[])
 
  return (
    <div className="backk">
      <div className="container cont2">
        <h1 className="title">Product Details</h1>
       
        <p className="info">Product Name : {product.name} </p>
        <hr className="hh"></hr>
        <p className="info">Product Price : {product.price}</p>
        <hr className="hh"></hr>
        <p className="info">Product Quantity : {product.quantity} </p>
        <hr className="hh"></hr>
        <p className="info">Product Image : {product.img} </p>
        <hr className="hh"></hr>
        <p className="info">Product Description : {product.desc} </p>
        <hr className="hh"></hr>
        <p>
          <i className="fs-3 p-1 text-warning bi bi-star-fill"></i>
          <i className="fs-3 p-1 text-warning bi bi-star-fill"></i>
          <i className="fs-3 p-1 text-warning bi bi-star-fill"></i>
          <i className="fs-3 p-1 text-warning bi bi-star-fill"></i>
          <i className="fs-3 p-1 text-warning bi bi-star-half"></i>
        </p>
        <Link to ='/products' className="bu">Back</Link>
      </div>
     
    </div>
  );
}
