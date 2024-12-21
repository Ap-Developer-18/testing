import React from 'react'
import Icons from './Icons'

const SectionName = ({ textName, className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Icons iconName='underline' />
      <span className='font-medium text-base leading-150 text-black tracing-[34%] uppercase'>{textName}</span>
      <Icons iconName='underline'/>
    </div>
  )
}

export default SectionName