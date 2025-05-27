import React from 'react'

const Card = ({title, desc ,price,image}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-2">

  
    <div class="card">
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{desc}.</p>
    <a href="#" class="btn btn-primary">{price}</a>
  </div>
</div>
  </div>
  )
}

export default Card
