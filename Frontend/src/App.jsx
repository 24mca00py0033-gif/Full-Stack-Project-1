import React from 'react'
import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import PlaceOrder from "./pages/PlaceOrder"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
  import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-slate-900'>
      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        <div className='absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl' />
        <div className='absolute right-0 top-32 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl' />
        <div className='absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl' />
      </div>
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
