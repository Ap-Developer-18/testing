import React from 'react'
import expertiseImg from '../assets/images/png/expertise.png'
import SectionName from './common/SectionName'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Button from './common/Button'

const Expertise = () => {
  return (
    <div className='py-[88px] bg-light-pink'>
      <div className="container lg:max-w-[1188px]">
        <div className='flex items-center justify-between gap-6 max-lg:flex-wrap'>
          <div className='lg:max-w-[539px] max-lg:w-full'>
            <img className='h-[419px] rounded-xl object-cover object-center w-full' src={expertiseImg} alt="expertise image" />
          </div>
          <div className='w-full lg:max-w-[487px]'>
            <SectionName textName='book shows our expertise ' />
            <Heading firstText='Tailored&nbsp;' simpleText='Drone Solutions' secondText='for Every Need' />
            <Paragraph paragraphText='Lorem ipsum dolor sit amet consectetur. Ut viverra tortor accumsan donec. Amet curabitur eget integer tincidunt. Eu bibendum semper magna arcu quam elit egestas. Euismod quis velit aliquet mattis non dui. Lorem ipsum dolor sit amet consectetur. Ut viverra tortor accumsan donec.' />
            <div className='mt-8 flex items-center justify-between gap-4 max-sm:flex-wrap'>
              <Button arrowText='Buy Now' className='text-nowrap' />
              <div className='bg-white rounded-[100px] py-1 px-[6px] flex justify-between gap-1'>
                <input type="email" name='email' className='pl-4 rounded-[100px] border-none outline-none font-light leading-150 text-light-dark w-full' placeholder='Email here' />
                <Button className='px-4 py-2' text='Download' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise