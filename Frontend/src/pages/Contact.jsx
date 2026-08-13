import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className='section-shell'>
      <div className='text-center text-2xl pt-10'>
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col gap-10 md:flex-row mb-28'>
        <img className='w-full rounded-[2rem] md:max-w-[32rem]' src={assets.contact_img} alt="" />
        <div className='neo-card flex flex-col items-start gap-6 rounded-[2rem] p-8'>
          <p className='text-xl font-semibold text-slate-900'>Our Store </p>
          <p className='text-slate-500'>5709 Gazhiabad Delhi South UP <br />UP,INDIA</p>
          <p className='text-slate-500'> Mobile-9985454545 <br />streethood@gamil.com</p>
          <p className='text-xl font-semibold text-slate-900'>Careers at Forever</p>
           <p className='text-slate-500'>Learn More about us and careers <br />UP,INDIA</p>
          <button className='neo-button px-8 py-4 text-sm'>Explore Jobs</button>

        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
