import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const  [currentState,setCurrentState]=useState('Login')
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')

  
  const {token ,setToken,navigate,backendUrl}=useContext(ShopContext)

  const onSubmitHandler=async (event)=>{
      event.preventDefault();
      try {
        if (currentState==='Sign up') {
          const response=await axios.post(backendUrl + '/api/user/register',{name,email,password})
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
          }else{
            toast.error(response.data.message)
          }
          
        }else{
          const response=await axios.post(backendUrl+ '/api/user/login',{email,password})
         if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
         }else{
            toast.error(response.data.message)

         }
          
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token,navigate])

  return (
    <form  onSubmit={onSubmitHandler} className='glass-panel mx-auto mt-12 flex w-[92%] max-w-[28rem] flex-col items-center gap-5 rounded-[2rem] px-6 py-8 text-slate-800 sm:px-10'>
      <div className='inline-flex items-center gap-2 mb-2'>
       <p className='prata-regular text-4xl text-slate-950'>
        {currentState}
       </p>
       <hr  className='border-none h-[1.5px] w-8 bg-slate-800'/>
      </div>
      {currentState==='Login'?'': <input onChange={(e)=>setName(e.target.value)}  value={name} type="text" className='w-full' placeholder="Name"  required/>}
     
       <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="email" className='w-full' placeholder="Email"  required/>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full' placeholder="Password" required />
        <div className='w-full flex justify-between text-sm text-slate-500 -mt-2'>
          <p className='cursor-pointer hover:text-slate-900'>Forgot your Password?</p>
          {
            currentState==='Login'
            ? <p onClick={()=>setCurrentState('Sign up')} className='cursor-pointer hover:text-slate-900'>Create Account</p>
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer hover:text-slate-900'>Login Here</p>
          }
        </div>
        <button className='neo-button mt-4 w-full px-8 py-3 font-semibold'>{currentState==='Login'?'Sign in':'Sign Up'}</button>
    </form>
  )
}

export default Login
