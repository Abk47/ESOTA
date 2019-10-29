import React from 'react'
import './Navigation.css'
import TopBar from './TopBar/TopBar'
import MidNavbar from './MidNavBar/MidNavBar'
import MainNav from './MainNav/MainNav'

const Navigation = (props) => {
  return (
    <header className='section-header'>
      <TopBar />
      <MidNavbar />
      <MainNav />
    </header>
  )
}

export default Navigation
