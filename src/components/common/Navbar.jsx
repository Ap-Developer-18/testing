import React from 'react'
import PageLogo from '../../assets/images/png/page-logo.png'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between pt-6 container max-w-[1188px]'>
      <img src={PageLogo} className='w-[90px] h-[58px]' alt="page logo" />
      <ul className='flex items-center gap-[126px]'>
        <li className="leading-150 text-white">HOME</li>
        <li className="leading-150 text-white">ABOUT</li>
        <li className="leading-150 text-white">SERVICES</li>
        <li className="leading-150 text-white">CONTACT</li>
      </ul>
      <Button arrowText='Contact' className='bg-transparent border border-white' />
    </div>
  )
}

export default Navbar