import React from 'react'
import { assets } from '../assets/assets';

const Hero = () => {
  return (
        <div className='glass-panel overflow-hidden rounded-4xl border border-white/70 shadow-[0_24px_70px_rgba(15,23,42,0.10)]'>
        {/* hero left side */}
                <div className='w-full sm:w-1/2 flex items-center justify-center px-6 py-10 sm:px-10 sm:py-0'>
                        <div className='max-w-xl text-slate-800'>
                                <div className='inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-pink-500'>
                                        <span className='h-2 w-2 rounded-full bg-pink-500'></span>
                                        Fresh drops only
                                </div>
                                <h1 className='prata-regular mt-5 text-4xl leading-tight text-slate-950 sm:text-5xl lg:text-7xl'>
                                    Style that feels current.
                                </h1>
                                <p className='mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base'>
                                    Discover curated fits, clean essentials, and bold seasonal pieces built for the feed and the street.
                                </p>
                                <div className='mt-8 flex flex-wrap items-center gap-4'>
                                        <a href='#latest-collection' className='neo-button px-6 py-3 text-sm font-semibold'>SHOP THE DROP</a>
                                        <a href='/collection' className='rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>EXPLORE ALL</a>
                                </div>
                        </div>
        </div>
        {/* hero right side */}
                <div className='w-full sm:w-1/2 p-4 sm:p-6'>
                  <div className='overflow-hidden rounded-[28px] bg-linear-to-br from-pink-100 via-white to-sky-100'>
                        <img className='w-full object-cover' src={assets.hero_img} alt="" />
                    </div>
                </div>
    </div>
  )
}

export default Hero
