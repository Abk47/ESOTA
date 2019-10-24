import React from 'react'
import './PriceRange.css'

const PriceRange = (props) => (
  <article className='filter-group'>
    <header className='card-header'>
      <h6 className='title'>Price range </h6>
    </header>
    <div className='filter-content collapse show' id='collapse_3'>
      <div className='card-body'>
        <input type='range' className='custom-range' min='0' max='100' />
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label>Min</label>
            <input className='form-control' placeholder='1,000' type='number' />
          </div>
          <div className='form-group text-right col-md-6'>
            <label>Max</label>
            <input className='form-control' placeholder='5,000,0000' type='number' />
          </div>
        </div>
        <button className='btn btn-block btn-primary'>Apply</button>
      </div>
    </div>
  </article>
)

export default PriceRange
