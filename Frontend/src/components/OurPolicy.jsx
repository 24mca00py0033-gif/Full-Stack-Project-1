import React from 'react'
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='grid gap-4 py-16 sm:grid-cols-3'>
      <div className='neo-card rounded-[1.5rem] p-6 text-center'>
        <img src={assets.exchange_icon} className='mx-auto mb-5 w-12' alt="" />
        <p className='font-semibold text-slate-900'>Easy Exchange Policy </p>
        <p className='mt-2 text-sm text-slate-500'>We offer hassle-free exchange and quick support.</p>
      </div>
        <div className='neo-card rounded-[1.5rem] p-6 text-center'>
        <img src={assets.quality_icon} className='mx-auto mb-5 w-12' alt="" />
        <p className='font-semibold text-slate-900'>7 Days Return Policy </p>
        <p className='mt-2 text-sm text-slate-500'>We provide a simple, customer-first return flow.</p>
      </div>
        <div className='neo-card rounded-[1.5rem] p-6 text-center'>
        <img src={assets.support_img} className='mx-auto mb-5 w-12' alt="" />
        <p className='font-semibold text-slate-900'>24/7 Customer Support </p>
        <p className='mt-2 text-sm text-slate-500'>Real help when you need it, not just a FAQ page.</p>
      </div>
    </div>
  )
}

export default OurPolicy
