import React, { useEffect, useState } from "react";
import { Card, Img, CBody, Text } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export function Products() {

  const [input, sett] = useState("");
  
  let deleteProduct = (productId)=>{
   axios.delete(`http://localhost:3006/products/${productId}`).then((response)=>{
    let updatedProducts = products.filter(product =>product.id !==productId);
    set(updatedProducts);
   })
  }
  let [products, set] = useState([]);

  let getAllProducts = async () => {
    try {
      let response = await axios.get("http://localhost:3006/products");
      set(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <div className="cont3">
      <div className="d-flex justify-content-between align-items-center fs-2 py-4 mx-5">
        Products
        <Link className="i3 " to="/products/0/edit">
          <i className="bi bi-plus-circle fs-1"></i>
        </Link>
      </div>
      <hr className="hh "></hr>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
      {products.map((product) => {
        return (
       
          <div key={product.id} className="p-3">
            <i onClick={()=> deleteProduct(product.id)} className="i3 bi bi-x-circle fs-3 del"></i>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={product.img}  className="img4"/>
              <Card.Body>
                <Card.Title >{product.name}</Card.Title>
                <Card.Text className="p">{product.desc}</Card.Text>
                <Card.Text onChange={(e) => sett(e.target.value)} className="p">
  
                  {product.quantity == 0 ? <p className="text-danger">Product is sold out!</p> : ""}
                  {product.quantity == 1 ? <p className="text-danger">Only one product left!</p> : ""}
                  </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to={`/products/${product.id}/edit`}>
                    {" "}
                    <i className="i3 bi bi-pencil-square fs-2 mx-2"></i>
                  </Link>
                  <Link to={`/products/${product.id}`}>
                    {" "}
                    <i className="i3 bi bi-eye-fill fs-2 mx-3"></i>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
         
        )
      })}
       </div>
    </div>
  );
}
