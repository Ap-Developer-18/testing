import React from 'react'
import SectionName from './common/SectionName'
import Heading from './common/Heading'
import { NEWS_DATA } from '../utils/helper'

const News = () => {
  return (
    <div className='py-16 md:py-20 lg:py-28 xl:py-[150px] container lg:max-w-[1188px] relative z-30'>
      <SectionName textName='In The News' />
      <Heading firstText='Read&nbsp;' simpleText='Our Blog to' secondText='Learn More' />
      <div className='flex items-start justify-between gap-4 xl:gap-6 mt-8 max-md:flex-wrap'>
        {NEWS_DATA.map((obj, index) => (
          <div className='rounded-[10px] border border-black shadow-custom border-opacity-10 lg:pb-5 p-3 h-full bg-white max-lg:min-h-0 max-xl:min-h-[451px]' key={index}>
            <img className='rounded-[10px] object-cover object-center' src={obj.imgPath} alt={obj.alt} />
            <p className='font-medium leading-130 text-light-dark mt-[14px]'>{obj.date}</p>
            <h2 className='leading-150 font-medium text-lg lg:text-xl mt-2'>{obj.title}</h2>
            <p className='leading-150 mt-2 lg:mt-4 text-light-dark'>{obj.desc}</p>
            <p className='leading-130 text-orange font-medium mt-3 sm:mt-4 md:mt-6'>{obj.readMore}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News