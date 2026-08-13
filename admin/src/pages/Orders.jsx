import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';


const Orders = ({token}) => {

  const [orders,setOrders]=useState([])

  const fetchAllOrders=async ()=>{
    if(!token){
      return null
    }
    try {
      const response=await axios.post(backendUrl+'/api/order/list',{},{headers:{token}})
      if(response.data.success){
        setOrders(response.data.orders)
      }else{
        toast.error(response.data.message)
      }


    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler=async (event ,orderId) => {
    try {
      const response=await axios.post(backendUrl+"/api/order/status",{orderId,status:event.target.value},{headers:{token}})
      if (response.data.success) {
        await fetchAllOrders()
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchAllOrders()
  },[token])
  

  return (
    <div className='space-y-6'>
      <div className='flex items-end justify-between gap-4 border-b border-gray-200 pb-4'>
        <div>
          <h3 className='text-2xl font-semibold text-gray-800'>Orders</h3>
          <p className='mt-1 text-sm text-gray-500'>Review placed orders, payment method, and delivery status.</p>
        </div>
        <div className='rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600'>
          Total: {orders.length}
        </div>
      </div>

      <div className='space-y-4'>
        {orders.length === 0 ? (
          <div className='rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500'>
            No orders found yet.
          </div>
        ) : (
          orders.map((order,index)=>(
            <div key={index} className='grid gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:grid-cols-[1.2fr_0.8fr_auto] lg:items-start'>
              <div className='flex gap-4'>
                <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-50'>
                  <img className='h-8 w-8' src={assets.parcel_icon} alt="Order parcel" />
                </div>
                <div className='space-y-3'>
                  <div className='space-y-1'>
                    {order.items.map((item,index)=>(
                      <p key={index} className='text-sm font-medium text-gray-700'>
                        {item.name} x {item.quantity} <span className='ml-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600'>{item.size}</span>
                      </p>
                    ))}
                  </div>

                  <div className='text-sm text-gray-600'>
                    <p className='font-semibold text-gray-800'>
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <p>{order.address.street},</p>
                    <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                    <p>{order.address.phone}</p>
                  </div>
                </div>
              </div>

              <div className='grid gap-2 rounded-xl bg-gray-50 p-4 text-sm text-gray-600'>
                <p><span className='font-medium text-gray-800'>Items:</span> {order.items.length}</p>
                <p><span className='font-medium text-gray-800'>Method:</span> {order.payementMethod}</p>
                <p><span className='font-medium text-gray-800'>Payment:</span> {order.payment ? 'Done' : 'Pending'}</p>
                <p><span className='font-medium text-gray-800'>Date:</span> {new Date(order.date).toLocaleDateString()}</p>
              </div>

              <div className='flex flex-col items-start gap-3 lg:items-end'>
                <p className='text-lg font-semibold text-gray-800'>{currency}{order.amount}</p>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm outline-none transition focus:border-black lg:w-48'>
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Deliverd">Deliverd</option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  )
}

export default Orders
 