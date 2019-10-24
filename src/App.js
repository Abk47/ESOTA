import React from 'react'
import './App.css'
import Wrapper from './components/Wrapper/Wrapper'
import Banner from './components/Banner/Banner'

function App () {
  return (
    <div className='App'>
      <Banner />
      <header className='heading mb-2 mt-3' style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>
        PRODUCTS
      </header>
      <Wrapper />
    </div>
  )
}

export default App
