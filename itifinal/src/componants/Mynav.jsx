import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export function Mynav() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg text-center">
  <div className="container-fluid">
  <a className="logo navbar-brand" href="#">
  <img src="/logoo.webp" width="42" height="42"/></a>
    <a className="logo2" href="#">BEAUTY CAVE</a>
    <div className="d-flex justify-content-center collapse navbar-collapse" id="navbarNav">
      <ul className=" navbar-nav">
        <li className=" nav-item mx-3 my-1">
          <NavLink to="/" className={({isActive})=>{return isActive ? 'a1 ' : 'a2' }}  >Home</NavLink>
        </li>
        <li className="nav-item mx-3 my-1">
          <NavLink to="/products" className={({isActive})=>{return isActive ? 'a1 ' : 'a2' }}  > Products </NavLink>
        </li>
      <li className="nav-item mx-3 my-1">
          <NavLink to ="/login" className={({isActive})=>{return isActive ? 'a1 ' : 'a2' }}  >Login</NavLink>
        </li>
    
      <li className="nav-item mar my-1">
          <NavLink to ="/login" className={({isActive})=>{return isActive ? 'a1 ' : 'a2' }}  >Logout</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  )
}
