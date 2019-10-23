import React from 'react'
// import { Link } from 'react-router-dom'

// TODO: Replace span with Link and make the pagination work

const Paginate = (props) =>
  (
    <nav class='mt-4' aria-label='Page navigation sample'>
      <ul class='pagination'>
        <li class='page-item disabled'><span to='/' class='page-link'>Previous</span></li>
        <li class='page-item active'><span to='/' class='page-link'>1</span></li>
        <li class='page-item'><span to='/' class='page-link'>2</span></li>
        <li class='page-item'><span to='/' class='page-link'>3</span></li>
        <li class='page-item'><span to='/' class='page-link'>Next</span></li>
      </ul>
    </nav>
  )

export default Paginate
