import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='section-title mb-3'>
      <div>
        <p className='text-xs font-semibold uppercase tracking-[0.3em] text-pink-500'>{text1}</p>
        <p className='mt-1 text-2xl font-semibold text-slate-950 sm:text-3xl'>{text2}</p>
      </div>
      <p className='section-title__line'></p>
    </div>
  )
}

export default Title
