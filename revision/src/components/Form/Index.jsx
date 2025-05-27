import React, { useState } from 'react'



const Form = () => {

    const [user, setUser]= useState({});
const getUserDetails=()=>{
    let email= document.getElementById("email")
    let password= document.getElementById("password");

    setUser({
        email:email.value,
        password:password.value,
    });
    alert("User detail saved successfully");

    email.value="";
    password.value="";
}


  return (
  <>
  <form className='container mt-5' onSubmit={(e)=>{
    e.preventDefault();
    getUserDetails();
  }}>
    <h1>Enter your details</h1>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
//       onChange={(e)=>{console.log(e.target.value)
// setUser({...user,email:e.target.value})

//       }}
    
    />

  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="password"
    //   onChange={(e)=>{console.log(e.target.value)
    //     setUser({...user,password:e.target.value})

    //   }}
    />
  </div>
 
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

{user.email !="" && user.password != "" ? 
<div>

<h1>{user.email}</h1>
<h1>{user.password}</h1>
</div> : <h1>No user details found</h1>
}

      </>
  )
}

export default Form
