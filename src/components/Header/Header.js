import React from 'react'

const Header = (props) => {
  return (
    <header className='border-bottom mb-4 pb-3'>
      <div className='form-inline'>
        <span className='mr-md-auto'>32 Items found </span>
        <select className='mr-2 form-control'>
          <option>Latest items</option>
          <option>Most Popular</option>
          <option>Lowest Price</option>
        </select>
      </div>
    </header>
  )
}

export default Header
