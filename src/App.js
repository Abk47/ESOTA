import React from 'react'
import './App.css'
import Wrapper from './components/Wrapper/Wrapper'

function App () {
  return (
    <div className='App'>
      <header className='heading mb-3 mt-3' style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>
        PRODUCTS
      </header>
      <Wrapper />
    </div>
  )
}

export default App
