import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Banner from '../Banner/Banner'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Advert from '../Advert/Advert'
import Aux from '../../HOC/Auxillary'

const Home = (props) => {
  return (
    <Aux>
      <Navigation />
      <Banner />
      <header className='heading mb-2 mt-3' style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>
          PRODUCTS
      </header>
      <Wrapper />
      <Advert />
      <Footer />
    </Aux>
  )
}

export default Home
