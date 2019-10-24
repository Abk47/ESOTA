import React from 'react'
import Search from '../Search/Search'
import PriceRange from '../PriceRange/PriceRange'

const SideColumn = (props) => (
  <aside className='col-md-3'>
    <div className='card'>
      <article className='filter-group'>
        <header className='card-header'>
          <h6 className='title'>Categories</h6>
        </header>
        <Search />
      </article>
      <PriceRange />
    </div>
  </aside>
)

export default SideColumn
