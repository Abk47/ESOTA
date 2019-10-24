import React from 'react'
import SideColumn from '../SideColumn/SideColumn'
import Grid from '../Grid/Grid'
import './Wrapper.css'

const Wrapper = (props) => (
  <section className='section-content padding-y'>
    <div className='container'>
      <div className='row'>
        <SideColumn />
        <Grid />
      </div>
    </div>
  </section>
)

export default Wrapper
