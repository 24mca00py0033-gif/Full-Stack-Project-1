import express from 'express'
import {placeOrder,updateStatus,userOrders,allOrders,placeOrderRazorpay,placeOrderStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter=express.Router()

//admin feautres
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment feautres
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)


orderRouter.post('/userorders',authUser,userOrders)


export default orderRouter

