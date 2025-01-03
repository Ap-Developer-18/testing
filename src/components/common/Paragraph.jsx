import React from 'react'

const Paragraph = ({ paragraphText, className }) => {
  return (
    <p className={`mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base font-normal leading-150 text-light-dark ${className}`}>{paragraphText}</p>
  )
}

export default Paragraph