import React from 'react'
import './header.css'
import CTA from './CAT'
import ME from '../../assets/me1.png'
import HeaderSocial from './headerSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey....! I'm</h5>
        <h1>Ravi Roushan</h1>
        <CTA/>
        <HeaderSocial/>
        <div className= "me">
          <img src= {ME} alt=""/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header