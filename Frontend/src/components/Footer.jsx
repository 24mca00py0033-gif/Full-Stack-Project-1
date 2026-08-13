import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-32 ' 
             src={assets.logo} alt="" />
             <p className='w-full mid:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem facilis quasi expedita aspernatur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias accusantium iusto cum quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dicta distinctio corrupti quisquam ratione!</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
            
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                 <li>+91-9872658585</li>
                <li>streethood@gmail.com</li>
            </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">CopyRight 2026@ streethood.com -All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
