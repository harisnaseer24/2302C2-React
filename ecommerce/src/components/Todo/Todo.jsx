import React,{ useState } from 'react'

const Todo = () => {
const [todos,setTodos]=useState([]);

const addTask=()=>{
    let taskInput=document.getElementById("task").value
    console.log(taskInput)
    //spread operator
    setTodos([...todos,taskInput])
    console.log(todos);
}
const deleteTask=(index)=>{
//    [1,5]        [1,3,5]
   let newTodos= todos.filter((task,i)=> i !== index);
   setTodos(newTodos);
   
}
  return (
    <div>
      <h1>Enter Task to do</h1>
      <input type="text" id="task" placeholder='Enter a task' className='form-control'/>
      <button onClick={()=>{
        addTask();
      }}>Add</button>

      <div className="container my-3">
        <ol>
        { todos.length > 0?
       
       todos.map((task,index)=>{
return <li key={index}><h1>{task}    <span className='btn btn-warning'>Edit</span> <span className='btn btn-danger' onClick={()=>{
    deleteTask(index)
}}>delete</span></h1></li>
       })
       :
       <h1>Please enter task first</h1>

       }
        </ol>
        

      </div>
    </div>
  )
}

export default Todo
