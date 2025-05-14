import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/product'
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Searchitem from './components/Searchitem'
import Cart from './components/cart'
import { items } from './components/Data'

const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])

  return (
   <>
   <Router>
   <Navbar cart={cart} setData={setData}/>
   <Routes>
   <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />}/>
   <Route path='/product/:id' element={<ProductDetail  art={cart} setCart={setCart}/>} />
   <Route path='/search/:term' element={<Searchitem art={cart} setCart={setCart}  />} />
   <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />


   </Routes>
   </Router>
  </>
  )
}

export default App
