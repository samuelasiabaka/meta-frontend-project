import React from 'react'
import Nav from './Nav'
import logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="little lemon logo" />
      <Nav />
    </header>
  )
}

export default Header
