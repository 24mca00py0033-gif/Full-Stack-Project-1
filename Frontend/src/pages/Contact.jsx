import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-112.5' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-centre items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store </p>
          <p className='text-gray-500'>5709 Gazhiabad Delhi South UP <br />UP,INDIA</p>
          <p className='text-gray-500'> Mobile-9985454545 <br />streethood@gamil.com</p>
          <p className='font-semibold text-xl text-shadow-gray-600'>Carres at Forever</p>
           <p className='text-gray-500'>Learn More about us and carreses <br />UP,INDIA</p>
          <button className='border border-black text-sm py-4 px-8 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
