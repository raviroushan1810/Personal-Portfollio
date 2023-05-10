import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const headerSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/ravi-roushan-1810rs" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/raviroushan1810" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default headerSocial