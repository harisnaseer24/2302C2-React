import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

function App() {
  const [count, setCount] = useState(5555) //states

  return (
    <>
    <User/>
    <User/>
    <User/>
   
      
    </>
  )
}

export default App

