import React from 'react'
import './Search.css'

const Search = (props) => (
  <div className='filter-content collapse show' id='collapse_1'>
    <div className='card-body'>
      <form className='pb-3'>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Search' />
          <div className='input-group-append'>
            <button className='btn btn-light' type='button'><i className='fa fa-search' /></button>
          </div>
        </div>
      </form>
      <ul className='list-menu'>
        <li>Electronics</li>
        <li>Watches</li>
        <li>Books</li>
        <li>Kids Clothes</li>
        <li>Utensils</li>   {/* TODO: Add Link */}
        <li>Mobile Phones</li>
      </ul>
    </div>
  </div>
)

export default Search
