import React from 'react'
import './Footer.css'

const Footer = () => (
  <div className='logo-sfdc'>
    <ul className='legal'>
      <li>Terms of Service</li>
      <li>Privacy</li>
      <li>Cookies</li>
      <li>© {new Date().getFullYear()} ESOTA</li>
    </ul>
  </div>
)

export default Footer
