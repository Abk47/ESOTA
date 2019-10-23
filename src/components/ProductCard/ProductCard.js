import React from 'react'
import './ProductCard.css'
import Button from '../BuyButton/Button'

const ProductCard = (props) => {
  return (
    <div className='col-md-4'>
      <figure className='card card-product-grid'>
        <div className='img-wrap'>
          <span className='badge badge-danger'> NEW </span>
          <img src={props.image} alt='shop-item' />
        </div>
        <figcaption className='info-wrap'>
          <div className='fix-height'>
            <div className='title'>{props.name}</div>
            <div className='price-wrap mt-2'>
              <span className='price'><strong>Tshs. {props.price}</strong></span>
            </div>
          </div>
          <Button title='Buy Now' />
        </figcaption>
      </figure>
    </div>
  )
}

export default ProductCard
