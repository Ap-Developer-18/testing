import React from 'react'
import Icons from './Icons'

const SectionName = ({ textName, className, mainText, bgWhite }) => {
  return (
    <div className={`flex max-lg:justify-start items-center gap-3 ${className}`}>
      <Icons className={`${bgWhite ? "stroke-white" : "stroke-black"}`} iconName='underline' />
      <span className={`font-medium text-sm sm:text-base leading-150 text-black tracing-[34%] uppercase ${mainText}`}>{textName}</span>
      <Icons className={`${bgWhite ? "stroke-white" : "stroke-black"}`} iconName='underline' />
    </div>
  )
}

export default SectionName