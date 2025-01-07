import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Icons from './common/Icons'
import Button from './common/Button'
import { useForm } from 'react-hook-form'

const ContactUs = () => {
  // FORM
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className='bg-light-pink py-7 sm:py-10 md:py-16 lg:py-[88px]'>
      <div className="container lg:max-w-[1188px] flex items-center justify-center lg:justify-between gap-8 lg:gap-6 max-lg:flex-wrap">
        <div className='lg:max-w-[375px] w-full'>
          <Heading firstText='Contact&nbsp;' simpleText='Us' />
          <Paragraph paragraphText='Are you interested in drones? Send us an email and let get in touch!' />
          <div className='flex items-center gap-5 mt-6'>
            <div className='size-10 rounded-md bg-orange flex items-center justify-center'><Icons iconName='location' /></div>
            <a href="https://www.google.com/maps?q=Saint+Petersburg,+FL+33712" target="_blank" rel="noopener noreferrer" className='font-medium leading-150 text-light-dark'>
              Saint Petersburg, FL 33712</a></div>
          <div className='flex items-center gap-5 mt-5'>
            <div className='size-10 rounded-md bg-orange flex items-center justify-center'><Icons iconName='mailBox' /></div>
            <a href="mailto:wade@hartleyaerial.com" className='font-medium leading-150 text-light-dark'> wade@hartleyaerial.com</a>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='lg:max-w-[613px] w-full sm:p-6 lg:px-8 p-4 lg:py-9 bg-white rounded-xl shadow-custom-sm'>
          <div className='max-sm:flex-wrap flex items-start justify-between gap-4 md:gap-8'>
            <div className='w-full'>
              <p className='text-light-dark mb-2'>First Name*</p>
              <input className='lg:max-w-[257px] text-light-dark px-3 w-full rounded-md h-11 outline-none border border-black border-opacity-10 focus:border-orange' type="text" {...register("firstname", { required: "First name is required" })} />
              {errors.firstname && <span className="text-red-500 max-sm:text-sm pt-1">{errors.firstname.message}</span>}
            </div>
            <div className='w-full'>
              <p className='text-light-dark mb-2'>Last Name*</p>
              <input className='lg:max-w-[257px] text-light-dark px-3 w-full rounded-md h-11 outline-none border border-black border-opacity-10 focus:border-orange' {...register("lastname", { required: "Last name is required" })} type="text" />
              {errors.lastname && <span className="text-red-500 max-sm:text-sm pt-1">{errors.lastname.message}</span>}
            </div>
          </div>
          <div className='max-sm:flex-wrap flex items-start justify-between gap-4 md:gap-8 mt-4 md:mt-8'>
            <div className='w-full'>
              <p className='text-light-dark mb-2'>Email*</p>
              <input className='lg:max-w-[257px] text-light-dark px-3 w-full rounded-md h-11 outline-none border border-black border-opacity-10 focus:border-orange' type="email" {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Please enter a valid email address"
                }
              })} />
              {errors.email && <span className="text-red-500 max-sm:text-sm pt-1">{errors.email.message}</span>}
            </div>
            <div className='w-full'>
              <p className='text-light-dark mb-2'>Phone Number*</p>
              <input className='lg;max-w-[257px] text-light-dark px-3 w-full rounded-md h-11 outline-none border border-black border-opacity-10 focus:border-orange remove-arrow' {...register("phone", { required: "Phone number is required" })} type='number' />
              {errors.phone && <span className="text-red-500 max-sm:text-sm pt-1">{errors.phone.message}</span>}
            </div>
          </div>
          <div className='w-full mt-4 md:mt-8'>
            <p className='text-light-dark mb-2'>Subject*</p>
            <input className='text-light-dark px-3 w-full rounded-md h-11 outline-none border border-black border-opacity-10 focus:border-orange' {...register("subject", { required: "subject is required" })} type="text" />
            {errors.subject && <span className='text-red-500 max-sm:text-sm pt-1'>{errors.subject.message}</span>}
          </div>
          <div className='w-full mt-4 md:mt-8'>
            <p className='text-light-dark mb-2'>Message*</p>
            <textarea className='text-light-dark p-3 w-full rounded-md h-11 outline-none border border-black border-opacity-10 focus:border-orange min-h-[140px] resize-none' {...register("textarea", { required: "textarea is required" })} type="text" ></textarea>
            {errors.textarea && <span className='text-red-500 max-sm:text-sm pt-1'>{errors.textarea.message}</span>}
          </div>
          <Button className='mt-5 md:mt-6 lg:mt-11' text='Submit' />
        </form>
      </div>
    </div>
  )
}

export default ContactUs