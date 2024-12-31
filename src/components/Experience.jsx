import React, { useState } from 'react';
import SectionName from './common/SectionName';
import Heading from './common/Heading';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { EX_DATA } from '../utils/helper';

const Experience = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const isBgWhite = false;

  return (
    <div className="px-6 mx-auto">
      <div className={`max-w-[1391px] mx-auto rounded-xl py-6 sm:py-8 md:py-12 lg:py-20 bg-black`}>
        <div className="container max-w-[1188px] max-sm:!px-3 max-md:!px-4">
          <SectionName mainText='text-white' textName='THE BEST EXPERIENCE'
            bgColor={isBgWhite ? 'black' : 'white'} />
          <Heading className="text-white text-center" firstText="Know&nbsp;" simpleText="More Through" secondText="Videos" />
          <div>
            <Swiper
              effect={'fade'}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[EffectFade, FreeMode, Thumbs]}
              className="mySwiper2 max-lg:max-w-[1000px] w-full h-[330px] sm:h-[400px] md:h-[492px] mt-4 sm:mt-6 md:mt-8 lg:mt-12">
              <div>
                {EX_DATA.map((obj, index) => (
                  <SwiperSlide key={index}>
                    <img className='w-full h-[330px] sm:h-[400px] md:h-[492px] object-cover object-center rounded-md border-[2px] md:border-[6px] xl:border-[12px] border-orange border-opacity-15' src={obj.path} alt={obj.alt} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              freeMode={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                370: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                492: {
                  slidesPerView: 4,
                },
                576: {
                  slidesPerView: 5,
                },
                708: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper mt-4 sm:mt-6 md:mt-9 max-w-[776px]">
              <div>
                {EX_DATA.map((obj, index) => (
                  <SwiperSlide key={index} className='w-[92px] h-[82px]'>
                    <img className='rounded-md w-[92px] h-[82px]' src={obj.path} alt={obj.alt} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;