import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ravi Personal Portfolio</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        {/* <li><a href="services">Services</a></li>
        <li><a href="portfolio">Portfolio</a></li> */}
        <li><a href="contact">contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com/ravi.roushan.58533"><FaFacebookF/></a>
        <a href="https://instagram.com/ravisinha1820"><FaInstagram/></a>
        <a href="https://twitter.com/raviroushan1820"><IoLogoTwitter/></a>
      </div>
    </footer>
  )
}

export default footer