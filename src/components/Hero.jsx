import React from 'react'
import Paragraph from './common/Paragraph'

const Hero = () => {
  return (
    <div className='container lg:max-w-[1188px] py-20 sm:py-24 md:py-32 lg:py-40 xl:py-[192px]'>
      <h2 className='text-white font-bold leading-110 text-3xl sm:text-4xl md:text-5xl lg:text-custom-2xl xl:text-custom-3xl lg:text-center font-geometric max-lg:hidden'>Professional<br /><span className='text-orange'>Web&nbsp;</span>developer</h2>
      <h2 className='text-white font-bold leading-110 text-3xl sm:text-4xl md:text-5xl font-geometric lg:hidden'>Professional Web <span className='text-orange'>developer</span></h2>
      <Paragraph className='text-base sm:text-lg md:text-xl lg:text-center !text-white' paragraphText='Hello myself aman punia and i play a role as a frontend developer ' />
    </div >
  )
}

export default Hero