import React from 'react'
import Paragraph from './common/Paragraph'

const Hero = () => {
  return (
    <div className='container max-w-[1188px] py-[192px]'>
      <h2 className='text-white font-bold leading-110 text-custom-2xl text-center font-geometric'>Professional<br /><span className='text-orange'>Web&nbsp;</span>developer</h2>
      <Paragraph className='text-xl text-center !text-white' paragraphText='Hello myself aman punia and i play a role as a frontend developer ' />
    </div >
  )
}

export default Hero