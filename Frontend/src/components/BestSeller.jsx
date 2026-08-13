import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products}=useContext(ShopContext)
    const [bestSeller,setBestSeller]=useState([])

    useEffect(()=>{
        const bestProduct = products.filter((item) => item.bestseller || item.bestSeller)
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='section-shell'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='mx-auto mt-3 w-3/4 max-w-2xl text-xs text-slate-500 sm:text-sm md:text-base'>
            The pieces people keep clicking, saving, and actually wearing out in the real world.</p>
        </div>
        <div className='grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {
                bestSeller.map((item,index)=>(
                     <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller
