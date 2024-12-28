import React from 'react'
import ManWithView from '../assets/images/png/about.png'
import ManXl from '../assets/images/png/about-xl.png'
import ManQuality from '../assets/images/png/about-quality.png'
import Dots from '../assets/images/png/dots.png'
import SectionName from './common/SectionName'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Button from './common/Button'

const About = () => {
  return (
    <div className='bg-light-pink py-16'>
      <div className="container max-w-[1188px]">
        <div className="flex items-center justify-between gap-6 max-lg:flex-wrap max-lg:flex-col-reverse">
          <div className='lg:max-w-[539px] relative lg:w-7/12 w-full'>
            <img src={ManWithView} className='max-xl:hidden w-full relative z-30' alt="man in nature view" />
            <img src={Dots} className='max-xl:hidden size-[159px] absolute -bottom-9 -right-[82px] pointer-events-none' alt="dots" />
            <img src={ManXl} className='xl:hidden w-full relative z-30 object-cover object-center sm:h-[350px] md:h-[500px] lg:h-[309px]' alt="man in nature view" />
            <img src={ManQuality} className='xl:hidden mt-3 w-full relative z-30' alt="man in nature view" />
          </div>
          <div className='lg:w-5/12 lg:max-w-[462px] w-full'>
            <SectionName textName='About US' />
            <Heading firstText='Get to Know Us:&nbsp;' simpleText='Where Innovation' secondText='Meet Sky' />
            <Paragraph paragraphText='We at Hartley Aerial cherish the role that we play in the drone service industry. We make it easy for your company, regardless of its size, to acquire professional drone imagery and data, anywhere you may need it.' />
            <Button arrowText='Meet the Team' className='mt-8' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About