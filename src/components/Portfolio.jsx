import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { PORTFOLIO_DATA } from '../utils/helper';
import Paragraph from './common/Paragraph'
import SectionName from './common/SectionName';
import Heading from './common/Heading';

const Portfolio = () => {
  return (
    <div className="relative py-16 md:py-20 lg:py-28 xl:py-[150px] overflow-hidden min-[1920px]:max-w-[1391px] min-[1920px]:mx-auto">
      <div className="container max-w-[1188px] mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        <SectionName textName='Portfolio' />
        <Heading firstText='See&nbsp;' simpleText='Our Work' secondText='Examples' />
      </div>
      <div className="!pl-6 overflow-visible">
        <Swiper breakpoints={{
          320: { slidesPerView: 2 }, 708: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }} loop={true}
          spaceBetween={10}
          pagination={{ clickable: true, el: '.swiper-pagination', }}
          autoplay={{ delay: 3000, disableOnInteraction: false, }}
          modules={[Pagination, Autoplay]} className="swiper-slider-port w-[calc(100vw+24px)] overflow-visible">
          {PORTFOLIO_DATA.map((obj, index) => (
            <SwiperSlide key={index} className='w-[250px] md:w-[355px]'>
              <div className="group relative w-full">
                <img src={obj.path} alt={obj.alt} className="h-full w-full object-cover object-center rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-30 p-2 sm:p-3 md:p-5 flex flex-col justify-end">
                  <h2 className='font-medium text-base md:text-lg lg:text-xl leading-150 text-white'>{obj.hoverTitle}</h2>
                  <Paragraph className='text-white max-sm:text-sm text-opacity-70 mt-1 sm:!mt-2' paragraphText={obj.hoverDesc} />
                  <p className='text-orange font-medium mt-2 max-sm:text-sm'>{obj.knowMore}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;