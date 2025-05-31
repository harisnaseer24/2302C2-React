import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router'
import ContactUs from './components/Contact/Index'

function App() {


  return (
    <>

     {/* <Home/> */}
     {/* <Contact/> */}
     

     {/* <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
     </Routes> */}

  
     <ContactUs/>


    </>
  )
}

export default App
