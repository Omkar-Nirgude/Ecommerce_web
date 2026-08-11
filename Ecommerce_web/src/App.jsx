import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/Product/Product'
import TopProduct from './components/TopProduct/TopProduct'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'






const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
      <TopProduct/>
      <Banner/>
      <Subscribe />
      <Product title={"Top Selling "} />
    </div>
  )
}

export default App
