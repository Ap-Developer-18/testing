import React from 'react'
import SectionName from './common/SectionName'
import Heading from './common/Heading';

const Experience = () => {
  const isBgWhite = false;
  return (
    <div className='px-6 mx-auto'>
      <div className="bg-black max-w-[1391px] mx-auto rounded-xl py-20">
        <div className="container max-w-[1188px]">
          <SectionName className='justify-center' bgColor={isBgWhite ? 'black' : 'white'} mainText='text-white' textName='THE BEST EXPERIENCE' />
          <Heading className='text-white text-center' firstText='Know&nbsp;' simpleText='More Through' secondText='Videos' />
        </div>
      </div>
    </div>
  )
}

export default Experience