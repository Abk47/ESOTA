import React from 'react'

const Header = (props) => {
  return (
    <header class='border-bottom mb-4 pb-3'>
      <div class='form-inline'>
        <span class='mr-md-auto'>32 Items found </span>
        <select class='mr-2 form-control'>
          <option>Latest items</option>
          <option>Most Popular</option>
          <option>Lowest Price</option>
        </select>
      </div>
    </header>
  )
}

export default Header
