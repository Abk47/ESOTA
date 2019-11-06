import React from 'react'
import Layout from '../Layout/Layout'
import './Payment.css'
import Table from '../Table/Table'

const Payment = (props) => (
  <Layout>
    <div className='content'>
      <div className='title'>
        <h3>CREDITS PAYMENT</h3>
      </div>
      <Table />
    </div>
  </Layout>
)

export default Payment
