import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/Product/Product'
import TopProduct from './components/TopProduct/TopProduct'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
      <TopProduct/>
    </div>
  )
}

export default App
