import React from 'react'

const Card = (props) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
      <div class="card" style={{width: '18rem'}}>
  <img src="https://www.pakmobizone.pk/wp-content/uploads/2024/08/infinix-Zero-40-5G-Rock-Black-1.png" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Rs. {props.price}</a>
  </div>
</div>
    </div>
  )
}

export default Card
