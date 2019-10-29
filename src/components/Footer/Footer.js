import React from 'react'
import './Footer.css'

const Footer = (props) => (
  <footer className='site-footer'>
    <div className='container'>
      <div className='row'>

        <div className='col-xs-6 col-md-3'>
          <h6>Categories</h6>
          <ul className='footer-links'>
            <li><a href='#'>Watches</a></li>
            <li><a href='#'>Cinema</a></li>
            <li><a href='#'>Fashion</a></li>
            <li><a href='#'>Cologne</a></li>
            <li><a href='#'>Furniture</a></li>
          </ul>
        </div>

        <div className='col-xs-6 col-md-3'>
          <h6>Company</h6>
          <ul className='footer-links'>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>Careers</a></li>
          </ul>
        </div>

        <div className='col-xs-6 col-md-3'>
          <h6>Help</h6>
          <ul className='footer-links'>
            <li><a href='#'>How it works</a></li>
            <li><a href='#'>Become a vendor</a></li>
            <li><a href='#'>Open dispute</a></li>
          </ul>
        </div>

        <div className='col-xs-6 col-md-3'>
          <h6>Quick Links</h6>
          <ul className='footer-links'>
            <li><a href='#'>My profile</a></li>
            <li><a href='#'>Delivery</a></li>
            <li><a href='#'>Pending products</a></li>
            <li><a href='#'>Payment</a></li>
          </ul>
        </div>

      </div>
      <hr />
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 col-sm-6 col-xs-12'>
          <p className='copyright-text'>Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
            <a href='#'> ESOTA</a>.
          </p>
        </div>

        <div className='col-md-4 col-sm-6 col-xs-12'>
          <ul className='social-icons'>
            <li><a className='facebook' href='#'><i className='fa fa-facebook' /></a></li>
            <li><a className='twitter' href='#'><i className='fa fa-twitter' /></a></li>
            <li><a className='linkedin' href='#'><i className='fa fa-linkedin' /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
