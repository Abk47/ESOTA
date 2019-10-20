import React from 'react'
import './Product.css'

const Product = (props) => {
  return (
    <div class='product'>
      <img src={props.image} alt='img' width='400' height='300' />
      <h6>{props.name}</h6>
      <p>Tshs. {props.price}</p>
    </div>
  )
}

export default Product
