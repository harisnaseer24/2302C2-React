import React, { useState } from 'react'
import Navbar from '../components/Navbar/Index'
import ProductDetail from '../components/ProductDetail/Index'
import Footer from '../components/Footer/Index'
import Loader from '../components/Loader/Index'

const Home = () => {
  const [isLoading, setisLoading] =useState(true);

  setTimeout(()=>{
    setisLoading(false)
  },2000)

  return (
    <>


    <Navbar/>
{isLoading ? <Loader/> :   <ProductDetail/>}
  
    <Footer/>
    </>
  )
}

export default Home
