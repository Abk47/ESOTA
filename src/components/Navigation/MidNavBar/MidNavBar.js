import React from 'react'
import { Link } from 'react-router-dom'

import './MidNavBar.css'

const MidNavBar = (props) => {
  return (
    <section className='header-main'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-3 col-lg-3 col-12'>
            <div className='brand-wrap'>
              <Link to='/'><h3 style={{ color: '#ff2500' }}><strong>ESOTA</strong></h3></Link>
            </div>
          </div>
          <div className='col-md-9 col-lg-9 col-sm-12 col-12 text-md-right'>
            <div className='mt-3 mt-md-0'>
              <Link to='/pending' className='btn btn-light mr-2'> Pending Product(s)<span className='ml-2 badge badge-warning'>2</span></Link>
              <Link to='/delivery' className='btn btn-light'> Delivery<span className='ml-2 badge badge-success'>5</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MidNavBar
