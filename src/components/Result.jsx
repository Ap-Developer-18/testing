import React from 'react'
import SectionName from './common/SectionName'
import Heading from './common/Heading'
import { RESULT } from '../utils/helper'
import Paragraph from './common/Paragraph'
import DotsEllipse from '../assets/images/png/dots-ellipse.png'
import ZigZag from '../assets/images/png/zig-zag-line.png'

const Result = () => {
  return (
    <div className='py-16 md:py-20 lg:py-28 xl:py-[150px] relative'>
      <div className='container lg:max-w-[1188px]'>
        <SectionName textName='Why Choose Us' className='justify-center' />
        <Heading firstText='Unmatched&nbsp;' simpleText='Expertise, Unrivalled' secondText='Results' className='text-center' />
        <div className='grid gap-4 xl:gap-6 lg:grid-flow-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 sm:mt-8 md:mt-10 lg:mt-12'>
          {RESULT.map((obj, index) => (
            <div className='p-3 rounded-[10px] bg-white border border-black border-opacity-10 h-full min-h-[323px]' key={index}>
                <div>
                  <img src={obj.path} className='w-full h-[183px] sm:h-[158px] md:h-[234px] lg:h-[165px] object-cover object-center rounded-lg' alt={obj.title} />
                  <h2 className='font-semibold text-xl leading-150 text-black mt-4'>{obj.title}</h2>
                  <Paragraph className={`mt-3 ${[0, 1].includes(index) ? 'max-w-[309px]' : 'w-full'}`} paragraphText={obj.description} />
                </div>
            </div>
          ))}
        </div>
        <img src={DotsEllipse} className='max-md:opacity-30 absolute left-0 -top-[70px] z-[-1] pointer-events-none' alt="dots" />
        <img src={ZigZag} className='max-md:opacity-30 absolute -top-[318px] pointer-events-none z-[-1] right-0' alt="zig zag line" />
      </div>
    </div>
  )
}

export default Result