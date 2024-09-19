import {BrowserRouter, Route, Routes, } from "react-router-dom"

import Homepage from "./comp/Homepage"
import Navbar from "./comp/Navbar"
import { useEffect, useState } from "react"
import StickyFooter from "./comp/StickyFooter"
import Cart from "./comp/Cart"
import SingleProduct from "./comp/SingleProduct"
import Whislist from "./comp/Whishlist"


function App() {

  const [products , setproduct] = useState([])
 

   useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
           .then((res)=>{
            return res.json()

           }).then((result)=>{
            console.log(result)
            setproduct(result)
           })
   },[]) 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>

    <Route path="/"  element={<Homepage productData={products}/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
      <Route path="/whishlist/" element={<Whislist/>} />
 
        </Routes>
    <StickyFooter/>
    </BrowserRouter>
    </>
  )
}

export default App
