import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)

    return (
        <Link className='group block overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/80 p-3 text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]' to={`/product/${id}`}>
            <div className='overflow-hidden rounded-[1.15rem] bg-slate-100'>
                <img className='aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-110' src={image[0]} alt="" />
            </div>
            <p className='pt-4 pb-1 text-sm font-medium text-slate-900'>{name}</p>
            <div className='flex items-center justify-between gap-3'>
              <p className='text-sm text-slate-600'>{currency}{price}</p>
              <span className='rounded-full bg-slate-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white'>View</span>
            </div>

        </Link>
    )
}

export default ProductItem
