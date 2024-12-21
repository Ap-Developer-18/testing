import React from 'react'
import SectionName from './common/SectionName'
import Heading from './common/Heading'
import { RESULT } from '../utils/helper'

const Result = () => {
  return (
    <div className='pb-[74px] pt-[150px]'>
      <div className='container'>
        <SectionName textName='Why Choose Us' className='justify-center' />
        <Heading firstText='Unmatched ' simpleText='Expertise, Unrivalled' secondText='Results' className='text-center' />
        <div className='flex items-center gap-6'>
          {RESULT.map((obj, index) => (
            <div className='p-3 rounded-[10px] border border-black border-opacity-10 w-4/12'>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Result