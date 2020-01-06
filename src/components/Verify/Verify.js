import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Verify.css'
import Aux from '../../HOC/Auxillary'

class Verify extends Component {
  render () {
    return (
      <Aux>
        <div className='container'>
          <h1 className='logo'>
          ESOTA
          </h1>
          <div className='content'>
            <div className='panel' id='login' style={{ paddingBottom: '25px' }}>
              <h3>Please enter the 4-digit verification code we sent via SMS:</h3>
              <form action='/verify' method='POST'>
                <div className='form-group'>
                  <label htmlFor='verification code'>Verification code</label>
                  <input autoComplete='off'
                    className='form-control verify' id='verify' name='verify'
                    placeholder='Enter your code here' type='text' maxLength='4' required />
                </div>
                <button className='btn btn-lg btn-block' name='verify' type='submit'>VERIFY</button>
              </form>
              <div className='sendAgainText'>
                Didn't receive the code?
              </div>
              <div className='option d-flex'>
                <div className='send'>
                  <Link to='/login'>Request again code</Link>
                </div>
                <div className='change'>
                  <Link to='/login'>Change phone number</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    )
  }
}

export default Verify
