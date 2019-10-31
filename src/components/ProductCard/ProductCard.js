import React, { Component } from 'react'
import './ProductCard.css'
import Button from '../BuyButton/Button'
import Swal from 'sweetalert2'

class ProductCard extends Component {
  handleClick = () => {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
  render () {
  const { image, name, price } = this.props 
    return (
      <div className='col-md-4'>
        <figure className='card card-product-grid'>
          <div className='img-wrap'>
            <span className='badge badge-danger'> NEW </span>
            <img src={image} alt='shop-item' />
          </div>
          <figcaption className='info-wrap'>
            <div className='fix-height'>
              <div className='title'>{name}</div>
              <div className='price-wrap mt-2'>
                <span className='price'><strong>Tshs. {price}</strong></span>
              </div>
            </div>
            <Button title='Buy Now' click={this.handleClick} />
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default ProductCard
