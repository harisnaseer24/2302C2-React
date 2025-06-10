import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/Child1/Index'
import Child2 from './components/Child2/Index'

function App() {
  // const [students, setStudents] = useState(["Haris","Owais","Usama"]);

  //Derived state
  // const totalstudents= students.length;

//up;lifting state
const [games,setGames]= useState(["COD","FIFA","GTA VI"])
  return (
    <>
     {/* <h1>Learning Derived States</h1>
<h2>Total Students : {totalstudents}</h2>
<button onClick={()=>{
setStudents([...students,"Muzammil"])
}}> Add muzammil</button> */}



     <h1>Learning State Uplifting</h1>
  <Child1 setGames={setGames} games={games}/>
  <Child2 games= {games}/>

    </>
  )
}

export default App
