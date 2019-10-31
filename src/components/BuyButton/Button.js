import React from 'react'

const Button = (props) => (
  <button className='btn btn-block' onClick={props.click} style={{ backgroundColor: '#ff2500', color: 'white' }}>{props.title}</button>
)

export default Button
