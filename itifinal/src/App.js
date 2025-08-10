import "./App.css";
import { Mynav } from "./componants/Mynav";
import { Footer } from "./componants/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Login } from "./componants/Login";
import { Home } from "./componants/Home";
import { Signup } from "./componants/Signup";
import {Products} from "./componants/Products";
import { Details } from "./componants/Details";
import { Formm } from "./componants/Formm";
import { Errorr } from "./componants/Errorr";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Shared } from "./componants/Shared";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
    
    <Route path='/' element={<Shared/>} >

    <Route path='products/:id/edit' element={<Formm/>} />
    <Route index element={<Home/>} />
    <Route path='products/:id' element={<Details/>} />

    <Route path='products' element={<Products/>} />

    </Route>

    <Route  path='/login' element={<Login/>}/>
    <Route  path='/signup' element={<Signup/>}/>
    
   <Route path='*' element={<Errorr/>} />

    </>
  ));
  return (
    <>
    <RouterProvider router={router}/>

    </>
  );
}
