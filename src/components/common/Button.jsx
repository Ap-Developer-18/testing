import React from 'react'
import Icons from './Icons'

const Button = ({ text, arrowText, className }) => {
    return (
        <button className={`border hover:text-orange hover:border-orange hover:bg-transparent  py-2 sm:py-[13px] px-4 sm:px-7 rounded-[106px] bg-orange text-sm sm:text-base md:text-lg leading-150 font-normal group text-white duration-300 ${arrowText ? 'flex items-center gap-3' : ''} ${className}`}>
            <span>{text}{arrowText}</span>
            {arrowText && <Icons className={`stroke-white group-hover:stroke-orange`} iconName='arrow' />}
        </button >
    )
}

export default Button