import React from 'react'

import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Aux from '../../HOC/Auxillary'

const Layout = (props) => (
  <Aux>
    <Navigation />
    {props.children}
    <Footer />
  </Aux>
)

export default Layout
