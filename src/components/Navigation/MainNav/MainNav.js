import React from 'react'
import './MainNav.css'
import { Link } from 'react-router-dom'

const MainNav = (props) => (
  <nav className='navbar navbar-main navbar-expand-md navbar-light border-top border-bottom' style={{ boxShadow: '0 2px 4px -1px rgba(0,0,0,0.25)' }}>
    <div className='container'>
      <div className='navbar-collapse collapse show' id='main_nav'>
        <ul className='navbar-nav' style={{ fontWeight: 'bold' }}>
          <li className='nav-item'>
            <Link to='/profile' className='nav-link pl-0'><i className='fa fa-user' style={{ color: '#ff2500' }} /> My Profile </Link>
          </li>
          <li className='nav-item'>
            <Link to='/payment' className='nav-link'><i className='fa fa-credit-card' style={{ color: '#ff2500' }} /> Payment</Link>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto' style={{ fontWeight: 'bold' }}>
          <li className='nav-item'>
            <Link to='/logout' className='nav-link'><i className='fa fa-sign-out' style={{ color: '#ff2500' }} /> Sign Out</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default MainNav
