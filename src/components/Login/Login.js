import React, { Component } from 'react'
import './Login.css'
import Aux from '../../HOC/Auxillary'
import Footer from '../Login-Footer/Footer'

class Login extends Component {
  render () {
    return (
      <Aux>
        <div className='container'>
          <h1 className='logo'>
          ESOTA
          </h1>
          <div className='content'>
            <div className='panel' id='login'>
              <h3>Log in to your account</h3>
              <form action='/login' method='post'>
                <div className='form-group'>
                  <label htmlFor='country'>Country</label>
                  <select className='form-control'>
                    <option defaultValue='true'>Tanzania</option>
                    <option value='1'>Kenya</option>
                    <option value='2'>Uganda</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='phone number'>Phone Number</label>
                  <input autoComplete='off' className='form-control password' id='phone' name='phone' placeholder='Phone Number' tabIndex='2' type='number' required />
                </div>
                <button className='btn btn-lg btn-block' name='commit' tabIndex='3' type='submit' value='Log In'>LOGIN</button>
              </form>
              <div className='panel-footer'>
              Welcome To Our Official Web Application
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Aux>
    )
  }
}

export default Login
