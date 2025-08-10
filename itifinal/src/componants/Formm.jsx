import axios from 'axios';
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export function Formm() {

  let {id} =useParams();

  let [product, set]= useState({})

  let navigate = useNavigate();
  useEffect(()=>{
   if (id != 0){
    axios.get(`http://localhost:3006/products/${id}`).then((response)=>{
      set(response.data)
}).catch((error)=>{
console.log(error)
})
   }
},[])

  

  let getInputData=(e)=>{
    set({...product,
      [e.target.name]:e.target.value
    })
  }
  let productHandler=(e)=>{
    e.preventDefault();
    if (id==0){
      axios.post("http://localhost:3006/products", product).then(()=>{
        navigate('/products')
          })
    }else {
      axios.put(`http://localhost:3006/products/${id}`, product).then(()=>{
        navigate('/products')
    })
  }
  }
  return (
    <div className='cont'>
     <h1 className=' ed'>{id== 0 ?'ADD ' : 'EDIT'}</h1>
<div>
<Form onSubmit={productHandler} className='formm mt-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        value={product.name}
        onInput={getInputData} name="name" type="text" placeholder="Enter name" />
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control 
        value={product.price}
        onInput={getInputData} name="price"  type="number" placeholder="Enter price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
        value={product.quantity}
        onInput={getInputData} name= "quantity" type="number" placeholder="Enter quantity" />
    
      </Form.Group>  
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        value={product.img}
        onInput={getInputData} type="path" placeholder="Enter img src" name="img" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control 
        value={product.desc}
        onInput={getInputData} name="desc" type="text" placeholder="Enter description" />
    
      </Form.Group>
      <button className='bu2 mt-5'>
        Confirm
      </button>
    </Form>
</div>

    </div>
  )
}
