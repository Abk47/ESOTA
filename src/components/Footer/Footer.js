import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = (props) => (
  <footer className='site-footer'>
    <div className='container'>
      <div className='row'>

        <div className='col-xs-6 col-md-3'>
          <h6>Categories</h6>
          <ul className='footer-links'>
            <li><Link to='/'>Watches</Link></li>
            <li><Link to='/'>Cinema</Link></li>
            <li><Link to='/'>Fashion</Link></li>
            <li><Link to='/'>Cologne</Link></li>
            <li><Link to='/'>Furniture</Link></li>
          </ul>
        </div>

        <div className='col-xs-6 col-md-3'>
          <h6>Company</h6>
          <ul className='footer-links'>
            <li><Link to='/'>About Us</Link></li>
            <li><Link to='/'>Contact Us</Link></li>
            <li><Link to='/'>Careers</Link></li>
          </ul>
        </div>

        <div className='col-xs-6 col-md-3'>
          <h6>Help</h6>
          <ul className='footer-links'>
            <li><Link to='/'>How it works</Link></li>
            <li><Link to='/'>Become a vendor</Link></li>
            <li><Link to='/'>Open dispute</Link></li>
          </ul>
        </div>

        <div className='col-xs-6 col-md-3'>
          <h6>Quick Links</h6>
          <ul className='footer-links'>
            <li><Link to='/profile'>My profile</Link></li>
            <li><Link to='/'>Delivery</Link></li>
            <li><Link to='/'>Pending products</Link></li>
            <li><Link to='/'>Payment</Link></li>
          </ul>
        </div>

      </div>
      <hr />
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 col-sm-6 col-xs-12'>
          <p className='copyright-text'>Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
            <Link to='/'> ESOTA</Link>.
          </p>
        </div>

        <div className='col-md-4 col-sm-6 col-xs-12'>
          <ul className='social-icons'>
            <li><Link className='facebook' href='/'><i className='fa fa-facebook' /></Link></li>
            <li><Link className='twitter' href='/'><i className='fa fa-twitter' /></Link></li>
            <li><Link className='linkedin' href='/'><i className='fa fa-linkedin' /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
