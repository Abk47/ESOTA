import React from 'react'
import './MainNav.css'

const MainNav = (props) => (
  <nav className='navbar navbar-main navbar-expand-md navbar-light border-top border-bottom' style={{ boxShadow: '0 2px 4px -1px rgba(0,0,0,0.25)' }}>
    <div className='container'>
      <div className='navbar-collapse collapse show' id='main_nav'>
        <ul className='navbar-nav' style={{ fontWeight: 'bold' }}>
          <li className='nav-item'>
            <a className='nav-link pl-0'><i className='fa fa-user' style={{ color: '#ff2500' }} /> My Profile </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'><i className='fa fa-credit-card' style={{ color: '#ff2500' }} /> Payment</a>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto' style={{ fontWeight: 'bold' }}>
          <li className='nav-item'>
            <a className='nav-link'><i className='fa fa-sign-out' style={{ color: '#ff2500' }} /> Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default MainNav
