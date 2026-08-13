import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title  text1={'About'} text2={'Us '}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'> 
        <img className='w-full md:max-w-112.5 ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque architecto non autem eligendi dolore laborum dignissimos quidem deleniti minus reiciendis! Consectetur quis deleniti mollitia, dicta perferendis eius officia inventore, sequi corporis assumenda nesciunt exercitationem labore excepturi praesentium dignissimos alias dolore corrupti eaque vero. Modi consequuntur similique autem possimus voluptate. Aliquid?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita voluptas a, laboriosam earum perspiciatis inventore architecto rem maxime dolorum consequuntur, quo nobis, provident enim commodi reprehenderit quaerat quia quasi eaque!</p>
        <b className='text-gray-800'>
          Our Mission
        </b>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat cupiditate sunt. Tenetur repellat accusamus laboriosam, placeat reprehenderit iste amet molestiae aliquid labore sunt cum? Praesentium itaque temporibus omnis tempore, sunt enim, maiores ad inventore sequi fugiat soluta debitis saepe maxime? Impedit deserunt animi soluta.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
         <Title text1={'Why '} text2={'Choose Us' }/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro vero corrupti magnam necessitatibus eius alias explicabo aut voluptates architecto?</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro vero corrupti magnam necessitatibus eius alias explicabo aut voluptates architecto?</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Eceptional Customer Service</b>
          <p  className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro vero corrupti magnam necessitatibus eius alias explicabo aut voluptates architecto?</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
