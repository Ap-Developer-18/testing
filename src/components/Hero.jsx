import React from 'react'
import Paragraph from './common/Paragraph'

const Hero = () => {
  return (
    <div className='container lg:max-w-[1188px] py-20 sm:py-24 md:py-32 lg:py-40 xl:py-[192px]'>
      <h2 className='text-white font-bold leading-110 text-3xl sm:text-4xl md:text-5xl lg:text-custom-2xl xl:text-custom-3xl lg:text-center font-geometric max-lg:hidden'>Professional<br /><span className='text-orange'>Drone&nbsp;</span>Website</h2>
      <h2 className='text-white font-bold leading-110 text-3xl sm:text-4xl md:text-5xl font-geometric lg:hidden'>Professional Drone <span className='text-orange'>Website</span></h2>
      <Paragraph className='text-base sm:text-lg md:text-xl lg:text-center !text-white' paragraphText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ' />
    </div >
  )
}

export default Hero