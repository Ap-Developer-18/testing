import React from "react";
import Icons from "./Icons";
import { MENU_DATA } from "../../utils/helper";
import PageLogo from "../../assets/images/webp/page-logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#111111] pt-8">
      <div className="container lg:max-w-[1188px]">
        <div className="flex max-md:flex-wrap items-start justify-between pb-6 sm:pb-9 max-lg:gap-10">
          <div className="md:w-5/12 w-full">
            <Link to="/" className="text-white text-sm xl:text-base">
              <img src={PageLogo} className="w-[60px] h-9 lg:w-[90px] lg:h-[58px]" alt="Page Logo" loading="lazy" />
            </Link>
            <p className="max-sm:text-sm text-light-black mt-2 max-w-[388px]">
              Lorem ipsum dolor sit amet consectetur. Vulputate ac amet commodo adipiscing interdum netus id.
            </p>
            <div className="flex items-center gap-3 mt-7">
              <div className='size-9 rounded-full bg-[#343434] flex items-center justify-center pr-px pt-px'>
                <Icons iconName='instagram' />
              </div>
              <div className='size-9 rounded-full bg-[#343434] flex items-center justify-center'>
                <Icons iconName='telegram' />
              </div>
              <div className='size-9 rounded-full bg-[#343434] flex items-center justify-center'>
                <Icons iconName='youtube' />
              </div>
            </div>
          </div>
          <div className="md:w-7/12 w-full">
            <div className="flex max-lg:justify-between max-sm:flex-wrap gap-3 md:gap-5 lg:gap-12 lg:justify-end">
              {Object.entries(MENU_DATA).map(([category, items]) => (
                <div key={category}>
                  <h2 className="font-medium text-[#f1f1f1]">
                    {category}
                  </h2>
                  <div className="flex flex-col gap-3 mt-3">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="text-light-black duration-300 text-sm md:text-base xl:text-lg text-nowrap w-fit hover:text-gray-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 leading-100 font-helvetica-medium font-medium flex justify-center items-center pl-4 border-t border-gray-600 border-opacity-[64%] py-4 text-center">
          © {currentYear} Hartley Aerial. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;