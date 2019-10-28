import React from 'react'
import './TopBar.css'

const TopBar = (props) => {
  return (
    <header className='section-header'>
      <nav className='navbar navbar-dark navbar-expand p-0' style={{ backgroundColor: '#ff2500' }}>
        <div className='container'>
          <ul className='navbar-nav d-none d-md-flex mr-auto'>
            <li className='nav-item'><span className='nav-link'>Welcome User!</span></li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item'><span className='nav-link'> Contact info: <strong> +255-12345678 </strong></span></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default TopBar
