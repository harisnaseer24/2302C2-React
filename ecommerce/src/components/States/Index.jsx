import React, { useState } from "react";

const ReactStates = () => {
  // let [userAge,setuserAge]  = useState(20)
  //     let age =20;
  // const changeAge =()=>{
  // age =30;
  // console.log(age)
  // }

  let [userName, setUserName] = useState("");
  let [fruits, setFruits] = useState(["Mango", "Lychee", "Kiwi"]);
  let [person, setPerson] = useState({
    name: "Haris",
    age: 20,
    address: {
      city: "Karachi",
      country: "Pakistan",
    },
  });
  let getData = () => {
    let username = document.getElementById("username");
    setUserName(username.value);
    username.value = "";
  };

  return (
    <div>
      <h1>Learning React States</h1>
      {/* <input type="text" onChange={(e)=>{
    console.log(e.target.value)
    setUserName(e.target.value)
}} placeholder='Enter Username' className='form-control'/> */}
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
        className="form-control"
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          getData();
        }}
      >
        {" "}
        Submit
      </button>

      {userName !== "" ? (
        <h2 className="text-primary display-5">{userName}</h2>
      ) : (
        <h2 className="text-primary display-5">Please Enter Name</h2>
      )}

      {/* <p>{age} </p>
      <p>{userAge} </p>
      <button className='btn btn-warning' onClick={()=>{
        changeAge()
      }}>Change Age</button>
      <button className='btn btn-success' onClick={()=>{
       setuserAge(++userAge);
      }}>Change User Age</button> */}
    </div>
  );
};

export default ReactStates;
