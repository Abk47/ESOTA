import React from 'react'
import './App.css'
import Wrapper from './components/Wrapper/Wrapper'
import Banner from './components/Banner/Banner'
import Navigation from './components/Navigation/Navigation'
import Advert from './components/Advert/Advert'

function App () {
  return (
    <div className='App'>
      <Navigation />
      <Banner />
      <header className='heading mb-2 mt-3' style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>
        PRODUCTS
      </header>
      <Wrapper />
      <Advert />
    </div>
  )
}

export default App
