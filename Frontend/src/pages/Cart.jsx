import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products ,currency,cartItems,updateQuantity,navigate}=useContext(ShopContext)

  const [cartData,setCartData]=useState([])

  useEffect(()=>{
    if (products.length>0) {
        const tempData=[]
    for (const items in cartItems){
      for(const item in cartItems[items]){
        if (cartItems[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
    }

  
  },[cartItems,products])

  return (
    <div className='section-shell pt-2'>
      <div className='mb-4 text-2xl'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div className='space-y-4'>
    {
      cartData.map((item,index)=>{
        const productData=products.find((product)=>product._id===item._id)
        return (
          <div key={index} className='neo-card grid grid-cols-1 items-center gap-4 rounded-[1.5rem] p-4 text-slate-700 sm:grid-cols-[1.2fr_0.4fr_auto]'>
            <div className='flex items-start gap-4'>
              <img className='w-16 rounded-xl sm:w-20'
              src={productData.image[0]} alt="" />
              <div >
                  <p className='text-sm font-semibold text-slate-950 sm:text-lg'>{productData.name}</p>
                  <div className='mt-2 flex items-center gap-5'>
                      <p className='font-medium text-slate-600'>{currency}{productData.price}</p>
                      <p className='rounded-full bg-slate-950/5 px-3 py-1 text-xs font-semibold text-slate-700'>{item.size}</p>
                  </div>
              </div>
            </div>
            <input onChange={(e)=>e.target.value===''|| e.target.value===0 ? null : updateQuantity(item._id,item.size,Number(e.target.value))}
             className='max-w-20 justify-self-start sm:justify-self-center'
              type='number' min={1} defaultValue={item.quantity}/>
              <button onClick={()=>updateQuantity(item._id,item.size,0)} className='grid h-10 w-10 place-items-center rounded-full bg-rose-50 text-rose-500 transition hover:bg-rose-100' type='button' aria-label='Remove item'>
              <img  
              className='w-4 sm:w-5 cursor-pointer'
              src={assets.bin_icon} alt="" />
              </button>

          
          </div>
        )
      })
    }
      </div>

      <div className='flex justify-end my-20'>
        <div className='glass-panel w-full rounded-[2rem] p-6 sm:w-[28rem]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')}
            className='neo-button my-8 px-8 py-3 text-sm cursor-pointer '
            >PROCEED TO CHECKOUT </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Cart
