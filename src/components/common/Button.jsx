import React from 'react'
import Icons from './Icons'

const Button = ({ text, arrowText, className }) => {
    return (
        <button className={`py-[13px] px-7 rounded-[106px] bg-orange text-lg leading-150 font-normal text-white ${arrowText ? 'flex items-center gap-3' : ''} ${className}`}>
            <span>{text}{arrowText}</span>
            {arrowText && <Icons iconName='arrow' />}
        </button >
    )
}

export default Button