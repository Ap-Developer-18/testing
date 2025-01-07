import React, { useState } from 'react';
import SectionName from './common/SectionName';
import Heading from './common/Heading';
import ellipseImg from '../assets/images/webp/experience-ellipse.webp'
import dots from '../assets/images/webp/dots-ellipse.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { EX_DATA } from '../utils/helper';

const Experience = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="px-6 mx-auto relative">
      <div className={`max-w-[1391px] mx-auto rounded-xl py-6 sm:py-8 md:py-12 lg:py-20 bg-black relative`}>
        <div className="container lg:max-w-[1188px] max-sm:!px-3 max-md:!px-4">
          <SectionName className={`justify-center`} bgWhite={true} mainText='text-white' textName='THE BEST EXPERIENCE' />
          <Heading className="text-white text-center" firstText="Know&nbsp;" simpleText="More Through" secondText="Videos" />
          <img src={dots} className='absolute left-0 -top-[116px] pointer-events-none max-lg:hidden' alt="ellipse" />
          <div>
            <Swiper effect={'fade'} thumbs={{ swiper: thumbsSwiper }} modules={[EffectFade, FreeMode, Thumbs]}
              className="mySwiper2 max-lg:max-w-[1000px] w-full h-[237px] sm:h-[330px] md:h-[419px] lg:h-[492px] mt-4 sm:mt-6 md:mt-8 lg:mt-12">
              {EX_DATA.map((obj, index) => (
                <SwiperSlide key={index}>
                  <img className='w-full h-[237px] sm:h-[330px] md:h-[419px] lg:h-[492px] object-cover object-center rounded-md border-[2px] md:border-[6px] xl:border-[12px] border-orange border-opacity-15' src={obj.path} alt={obj.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} freeMode={true}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10, }, 370: { slidesPerView: 3, spaceBetween: 10, },
                492: { slidesPerView: 4, }, 576: { slidesPerView: 5, }, 708: { slidesPerView: 6, spaceBetween: 20, },
                1024: { slidesPerView: 7, spaceBetween: 20 },
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper mt-4 sm:mt-6 md:mt-9 max-w-[776px]">
              {EX_DATA.map((obj, index) => (
                <SwiperSlide key={index} className='w-[92px] h-[82px]'>
                  <img className='rounded-md cursor-pointer' src={obj.path} alt={obj.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <img src={ellipseImg} className='absolute right-0 -top-[59%] max-md:hidden rotate-180' alt="ellipse" />
    </div>
  );
};

export default Experience;