import React from 'react'

const Heading = ({ simpleText, firstText, secondText, className }) => {
  return (
    <h2 className={`font-bold text-black text-custom-xl !leading-120 mt-4 ${className}`}>
      <span className='font-geometric'>{firstText}</span>
      <span className='font-normal font-geometric'>{simpleText}&nbsp;</span>
      <span className='font-geometric'>{secondText}</span>
    </h2>
  )
}

export default Heading