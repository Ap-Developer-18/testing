import React from 'react'
import Icons from './Icons'

const SectionName = ({ textName, className, mainText, bgColor }) => {
  return (
    <div className={`flex max-lg:justify-start items-center gap-3 ${className}`}>
      <Icons className={`stroke-${bgColor === 'white' ? 'white' : 'black'}`} iconName='underline' />
      <span className={`font-medium text-base leading-150 text-black tracing-[34%] uppercase ${mainText}`}>{textName}</span>
      <Icons className={`stroke-${bgColor === 'white' ? 'white' : 'black'}`} iconName='underline' />
    </div>
  )
}

export default SectionName