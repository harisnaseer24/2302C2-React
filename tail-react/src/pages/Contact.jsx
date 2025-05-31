import React, { useState } from 'react'
import ContactUs from '../components/Contact/Index'
import Navbar from '../components/Navbar/Index'
import Footer from '../components/Footer/Index'
import ProductDetail from '../components/ProductDetail/Index'
import Loader from '../components/Loader/Index'

const Contact = () => {
    const [isLoading, setisLoading] =useState(true);
  
    setTimeout(()=>{
      setisLoading(false)
    },2000)
  
  return (
  <>
   <Navbar/>
   {isLoading ? <Loader/> :  <> <ContactUs/> <ProductDetail/></>}
  
  
    <Footer/>
  </>
  )
}

export default Contact
