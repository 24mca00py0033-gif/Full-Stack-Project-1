import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='glass-panel grid gap-14 rounded-[2rem] p-8 text-sm sm:grid-cols-[2fr_1fr_1fr]'>
        <div>
            <img className='mb-5 w-32 ' 
             src={assets.logo} alt="" />
             <p className='max-w-xl text-slate-600'>A fashion playground for fresh fits, moodboard-worthy drops, and everyday essentials with a sharper edge.</p>
        </div>
        <div>
            <p className='mb-5 text-xl font-semibold text-slate-950'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-slate-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
            
        </div>
        <div>
            <p className='mb-5 text-xl font-semibold text-slate-950'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-slate-600'>
                 <li>+91-9872658585</li>
                <li>streethood@gmail.com</li>
            </ul>
        </div>

      </div>
      <div className='mt-6'>
        <hr />
        <p className="py-5 text-center text-sm text-slate-500">CopyRight 2026@ streethood.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
