import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const [visible,setVisible]=useState(false)
    const location=useLocation()

    useEffect(()=>{
        if (location.pathname.includes('collection')) {
                setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible ? (
    <div className='my-4 rounded-[1.5rem] border border-white/70 bg-white/75 text-center shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl'>
        <div className='mx-auto my-5 inline-flex w-11/12 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 border-none bg-transparent text-sm outline-none '
        type="text" placeholder="Search" />
        <img className='w-4'
         src={assets.search_icon} alt="" />
        </div>
        <button onClick={()=>setShowSearch(false)} className='mb-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white' type='button'>
          <img
        className='inline w-3 cursor-pointer invert'
        src={assets.cross_icon} alt="" />
          Close
        </button>
      
    </div>
  ):null
}

export default SearchBar
