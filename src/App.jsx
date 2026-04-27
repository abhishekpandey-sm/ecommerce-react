import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
   <>
     <div className="app">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Auth />} />
          <Route path='/chckout' element={<Checkout />} />
          <Route path='/products/:id' element={<ProductDetails/>} />
        </Routes>
     </div>
   </>
  ) 
}

export default App
