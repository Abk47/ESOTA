import React from 'react'
import Layout from '../Layout/Layout'
import './Pending.css'
import Table from '../Table/Table'

const Pending = (props) => (
  <Layout>
    <div className='content'>
      <div className='title'>
        <h3>PENDING PRODUCTS</h3>
      </div>
      <Table />
    </div>
  </Layout>
)

export default Pending
