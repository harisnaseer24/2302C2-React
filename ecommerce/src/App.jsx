import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'
import HomePage from './pages/Homepage/Index'
import Todo from './components/Todo/Todo'
import ReactStates from './components/States/Index'


function App() {
//  let products=[
//   {name:"product1",price:1200},
//   {name:"product2",price:1030},
//   {name:"product3",price:1400},
//   {name:"product4",price:1100},
//   {name:"product5",price:2100},

//  ];
  return (
    <>
{/* <HomePage>
<div className="container">
  <div className="row">
  {
products.map((prod,index)=>{
return <Card name={prod.name} price ={prod.price} key={index}/>
})
}
  </div>
</div>
</HomePage> */}
<Todo/>

{/* <ReactStates/> */}


     </>
  )
}

export default App
