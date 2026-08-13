import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products}=useContext(ShopContext)
    const [latestProducts,setLatestProduct]=useState([])

    useEffect(()=>{
        setLatestProduct(products.slice(0,10))
    },[products])

  return (
    <div id='latest-collection' className='section-shell'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'} />
            <p className='mx-auto mt-3 w-3/4 max-w-2xl text-xs text-slate-500 sm:text-sm md:text-base'>
            New-season edits, clean silhouettes, and easy pieces that hit the current mood without trying too hard. </p>
        </div>
        {/* Rendring Products */}
        <div className='grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
