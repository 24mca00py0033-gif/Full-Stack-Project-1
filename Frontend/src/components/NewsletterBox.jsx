import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(event)=>{
            event.preventDefault()
    }

  return (
    <div className='glass-panel rounded-[2rem] px-6 py-10 text-center sm:px-10'>
      <p className='text-3xl font-semibold text-slate-950 sm:text-4xl'>Subscribe and unlock 20% off</p>
      <p className='mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base'>
        Drop your email for new launches, restocks, and member-only offers that feel worth opening.
      </p>
      <form onSubmit={onSubmitHandler}
      className='mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 rounded-[1.5rem] bg-white/75 p-3 shadow-lg shadow-slate-950/5 sm:flex-row'>
        <input className='flex-1 border-none bg-transparent px-4 py-3 outline-none'
             type="email" placeholder="Enter your email" required/>
         <button className='neo-button px-8 py-3 text-sm font-semibold tracking-wide'
             type="submit" 
             >SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsletterBox
