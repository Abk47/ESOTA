import React from 'react'
import Header from '../Header/Header'
import ProductList from '../ProductList/ProductList'
import Pagination from '../Pagination/Pagination'

const Grid = (props) => (
  <main class='col-md-9'>
    <Header />
    <ProductList />
    <Pagination />
  </main>
)

export default Grid
