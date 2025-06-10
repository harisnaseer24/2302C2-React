import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router'
import ContactUs from './components/Contact/Index'

function App() {

const handleSubmit=async()=>{
 
await
  new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("form submitted");
     resolve();
    },2000)
  })
}
  return (
    <>

     {/* <Home/> */}
     {/* <Contact/> */}
     

     {/* <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
     </Routes> */}

  <form action={handleSubmit}>

     <ContactUs/>
  </form>


    </>
  )
}

export default App
