import React from 'react'
import  about  from "../../assets/about.jpg"  

const About = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-lg-6">
            <img src={about} alt="" height={400} width={500} />
        </div>
        <div className="col-lg-6">
            <h1>About our services and team</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati voluptas tempora eligendi maxime in! Voluptate possimus doloremque deserunt corrupti doloribus distinctio veniam neque nobis eligendi excepturi, nemo rem ad earum!</p>
            <button className='btn btn-success'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default About
