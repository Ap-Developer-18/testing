import React, { useState } from 'react';
import SectionName from './common/SectionName';
import Heading from './common/Heading';
import { SERVICES } from '../utils/helper';
import Paragraph from './common/Paragraph';
import Icons from './common/Icons';
import Ellipse from '../assets/images/png/services-ellipse.png'

const Services = () => {
    const [index, setIndex] = useState(0);
    function leftSideHandler() {
        { (index - 1 < 0) ? setIndex(SERVICES.length - 1) : setIndex(index - 1) }
    }
    function rightSideHandler() {
        if (index + 1 >= SERVICES.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <div className="py-[150px] relative">
            <div className="container max-w-[1188px] relative z-30">
                <SectionName textName="Services" className="justify-center" />
                <Heading className="text-center" firstText="Your&nbsp;" simpleText="Gateway to" secondText="Aerial Excellence" />
                <div className="mt-12">
                    {SERVICES.map((obj, id) => (
                        id === index && (
                            <div className="flex items-center justify-between gap-12 relative duration-300" key={id}>
                                <div>
                                    <h2 className="font-bold text-custom-lg leading-120 font-geometric">{obj.title}</h2>
                                    <Paragraph className="max-w-[525px]" paragraphText={obj.desc} />
                                    <div className="flex items-center gap-3 mt-3">
                                        <button onClick={leftSideHandler} className="size-10 rounded-full border border-black flex justify-center items-center xxl:absolute xxl:top-1/2 xxl:-translate-y-1/2 xxl:-left-[77px]"><Icons iconName="leftArrow" /></button>
                                        <button onClick={rightSideHandler} className="size-10 rounded-full border border-black rotate-180 flex justify-center items-center xxl:absolute xxl:top-1/2 xxl:-translate-y-1/2 xxl:-right-[77px]">
                                        <Icons iconName="leftArrow" /></button>
                                    </div>
                                </div>
                                <img className="w-[541px] h-[451px] object-cover object-center rounded-md" src={obj.path} alt={obj.alt} />
                            </div>
                        )
                    ))}
                </div>
            </div>
            <img src={Ellipse} className='absolute z-0 pointer-events-none left-0 -top-1/2 w-[307px] h-[664px]' alt="ellipse" />
        </div>
    );
};

export default Services;