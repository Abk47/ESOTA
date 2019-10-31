import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Banner from '../Banner/Banner'
import Layout from '../Layout/Layout'
import Advert from '../Advert/Advert'

const Home = (props) => {
  return (
    <Layout>
      <Banner />
      <header className='heading mb-2 mt-3' style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>
          PRODUCTS
      </header>
      <Wrapper />
      <Advert />
    </Layout>
  )
}

export default Home
