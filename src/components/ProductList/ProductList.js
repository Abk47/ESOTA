import React, { Component } from 'react'
import ProductCard from '../ProductCard/ProductCard'

// DUMMY DATA FOR THE STORE
const data = [
  { name: 'Polo T-Shirt', price: '15,000', image: '/images/1.jpg' },
  { name: 'Leather Coat', price: '70,000', image: '/images/2.jpg' },
  { name: 'Denim Shorts', price: '45,000', image: '/images/3.jpg' },
  { name: 'School Bag', price: '20,000', image: '/images/4.jpg' },
  { name: 'Mac Cover', price: '25,000', image: '/images/5.jpg' },
  { name: 'Sofa', price: '500,000', image: '/images/6.jpg' },
  { name: 'Smart Watch', price: '350,000', image: '/images/7.jpg' },
  { name: 'Airpods', price: '400,000', image: '/images/8.jpg' },
  { name: 'Headsets', price: '95,000', image: '/images/9.jpg' },
  { name: 'Device', price: '450,000', image: '/images/10.jpg' },
  { name: 'Camera', price: '950,000', image: '/images/11.jpg' }
]

class ProductList extends Component {
  render () {
    const Products = data.map((product, i) => {
      return <ProductCard key={i} name={product.name} price={product.price} image={product.image} />
    })
    return (
      <div className='row'>
        {Products}
      </div>
    )
  }
}

export default ProductList
