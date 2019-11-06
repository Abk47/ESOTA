import React, { Component } from 'react'
import './Table.css'

class Table extends Component {
  render () {
    const data = {
      id: '34780090110',
      amount: '250,000',
      date: '4.09.2019'
    }

    return (
      <table>
        <thead>
          <tr>
            <th>TRANSACTION ID</th>
            <th>CREDITED AMOUNT</th>
            <th>RECEIVED DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.amount}</td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <td>{data.id}</td>
            <td>{data.amount}</td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <td>{data.id}</td>
            <td>{data.amount}</td>
            <td>{data.date}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
