import React from 'react'

const Paragraph = ({ paragraphText, className }) => {
  return (
    <p className={`mt-3 sm:mt-4 text-base font-normal leading-150 text-light-dark ${className}`}>{paragraphText}</p>
  )
}

export default Paragraph