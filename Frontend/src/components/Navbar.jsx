import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import {NavLink,Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
const [visible ,setVisible] =useState(false)
const {setShowSearch,getCartCount,navigate, token ,setToken,setCartItems}=useContext(ShopContext)

const logout=()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
   
}

  return (
        <div className='sticky top-3 z-50 mb-6 flex items-center justify-between rounded-full border border-white/60 bg-white/75 px-4 py-3 font-medium shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'>
            <Link to='/' className='flex items-center gap-3'><img src={assets.logo} className='w-32 sm:w-36' alt="" /></Link>

            <ul className='hidden items-center gap-2 rounded-full bg-slate-950/5 px-3 py-2 sm:flex text-sm text-slate-700'>
                <NavLink to='/' className='rounded-full px-4 py-2 transition hover:bg-white'>
            <p>HOME</p>
        </NavLink>
                 <NavLink to='/collection' className='rounded-full px-4 py-2 transition hover:bg-white'>
            <p>COLLECTION</p>
                </NavLink> <NavLink to='/about' className='rounded-full px-4 py-2 transition hover:bg-white'>
            <p>ABOUT</p>
                </NavLink> <NavLink to='/contact' className='rounded-full px-4 py-2 transition hover:bg-white'>
            <p>CONTACT</p>
        </NavLink>
      </ul>
        <div className='flex items-center gap-3 sm:gap-5'>
                <button onClick={()=>setShowSearch(true)} className='grid h-10 w-10 place-items-center rounded-full bg-slate-950/5 text-slate-700 transition hover:bg-pink-100' type='button' aria-label='Search'>
                    <img src={assets.search_icon} className='w-5' alt="" />
                </button>
        <div className='group relative'>
                     <button onClick={()=>token? null : navigate('/login')} className='grid h-10 w-10 place-items-center rounded-full bg-slate-950/5 text-slate-700 transition hover:bg-pink-100' type='button' aria-label='Profile'>
                         <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                     </button>
         {/* dropdpwn menu */}
            {token && 
             <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
                        <div className='neo-card flex flex-col gap-2 w-40 rounded-2xl py-3 px-4 text-slate-600'>
                                        <p className="cursor-pointer hover:text-slate-900">My Profile</p>
                                        <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-slate-900">Orders</p>
                                        <p onClick={logout} className="cursor-pointer hover:text-slate-900">Log Out</p>
                </div>
            </div>}

        </div>
        <Link to='/cart' className='relative'>
                <span className='grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white shadow-lg shadow-slate-950/20'>
                    <img src={assets.cart_icon} className="w-5 min-w-5 invert" alt="" />
                </span>
                <p className='absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-fuchsia-500 text-[10px] font-semibold text-white'>{getCartCount()}</p>
        </Link>
                <button onClick={()=>setVisible(true)} className='grid h-10 w-10 place-items-center rounded-full bg-slate-950/5 sm:hidden' type='button' aria-label='Menu'>
                    <img src={assets.menu_icon} className='w-5 cursor-pointer' alt="" />
                </button>
    </div>
    
    {/* sidebar menu for small screen */}

    <div className={`fixed inset-0 z-50 overflow-hidden bg-slate-950/30 transition-all ${visible?'opacity-100':'pointer-events-none opacity-0'}`}>
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white p-5 shadow-2xl transition-transform ${visible?'translate-x-0':'translate-x-full'}`}>
        <div className='flex flex-col text-slate-700'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 rounded-2xl bg-slate-950/5 p-3 cursor-pointer'>
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                <p >Back</p>
            </div>
            <div className='mt-5 flex flex-col gap-2'>
              <NavLink  onClick={()=>setVisible(false)} className='rounded-2xl px-4 py-3 transition hover:bg-slate-950/5' to='/'>HOME</NavLink>
              <NavLink onClick={()=>setVisible(false)}  className='rounded-2xl px-4 py-3 transition hover:bg-slate-950/5' to='/collection'>COLLECTION</NavLink>
              <NavLink  onClick={()=>setVisible(false)} className='rounded-2xl px-4 py-3 transition hover:bg-slate-950/5' to='/about'>ABOUT</NavLink>
              <NavLink  onClick={()=>setVisible(false)} className='rounded-2xl px-4 py-3 transition hover:bg-slate-950/5' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
