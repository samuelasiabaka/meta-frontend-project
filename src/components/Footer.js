import React from 'react'
import Nav from './Nav'
import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="little lemon logo" />
      <nav aria-label="doormat nav" className="doormat-nav">
        <h2>Doormat Nav</h2>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
          <li>Six</li>
        </ul>
      </nav>
      <nav aria-label="contact nav" className="contact-nav">
        <h2>Contact</h2>
        <ul>
          <li>Address</li>
          <li>Phone</li>
          <li>Email</li>
        </ul>
      </nav>
      <nav aria-label="social nav" className="social-nav">
        <h2>Social Media Links</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
