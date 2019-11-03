import React from 'react'
import Layout from '../Layout/Layout'
import './Profile.css'

const Profile = (props) => (
  <Layout>
    <div className='content'>
      <div className='title'>
        <h3>PROFILE</h3>
      </div>
      <div className='card info'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card-body text-center' style={{ margin: '50px' }}>
              <h5 className='card-title'>Francis Bishop</h5>
              <p className='card-text'>+255754527010</p>
              <h4 className='card-credit'>CREDITS | <span className='credit'>  0.0 TZS</span></h4>
              <p className='card-text'>Congratulations, you're now receiving credits.</p>
            </div>
          </div>
          
          <div className='col-md-6'>
            <div className='c100 p33 big'>
              <span>33%</span>
              <div className='slice'>
                <div className='bar' />
                <div className='fill' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Layout>
)

export default Profile
