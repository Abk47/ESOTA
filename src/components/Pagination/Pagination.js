import React from 'react'
// import { Link } from 'react-router-dom'

// TODO: Replace span with Link and make the pagination work

const Paginate = (props) =>
  (
    <nav className='mt-4' aria-label='Page navigation sample'>
      <ul className='pagination'>
        <li className='page-item disabled'><span to='/' className='page-link'>Previous</span></li>
        <li className='page-item active'><span to='/' className='page-link'>1</span></li>
        <li className='page-item'><span to='/' className='page-link'>2</span></li>
        <li className='page-item'><span to='/' className='page-link'>3</span></li>
        <li className='page-item'><span to='/' className='page-link'>Next</span></li>
      </ul>
    </nav>
  )

export default Paginate
