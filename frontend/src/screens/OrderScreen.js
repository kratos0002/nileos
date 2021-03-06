import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { detailsOrder } from '../actions/orderActions'

import CheckoutSteps from '../components/CheckoutSteps'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function OrderScreen(props) {


    const navigate = useNavigate()
    const params = useParams()
    const {id} = params

    const orderId =  id

    const dispatch = useDispatch()

    const orderDetails = useSelector(state=> state.orderDetails)
    const { order, loading, error} =  orderDetails



    useEffect(()=>{
        dispatch(detailsOrder(orderId))
    },[dispatch, orderId])
    
  return loading? (<LoadingBox></LoadingBox>):
  error? (<MessageBox variant="danger">{error}</MessageBox>):
  (
    <div>
        <h1>Order {order._id} </h1>
        <div className='row top'>
            <div className='col-2'>
                <ul>
                    <li>
                        <div className='card card-body'>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name: </strong>{order.shippingAddress.fullName} <br />
                                <strong>Address: </strong>{order.shippingAddress.address},
                                {order.shippingAddress.city},{order.shippingAddress.postalCode},{order.shippingAddress.country}
                            </p>
                            {order.isDelivered? <MessageBox variant ="success">Delivered at {order.delieredAt}</MessageBox>:
                            <MessageBox variant ="danger">Not Delivered</MessageBox>}
                        </div>
                    </li>
                    <li>
                        <div className='card card-body'>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method: </strong>{order.paymentMethod}
                            </p>
                            {order.isPaid? <MessageBox variant ="success">Paid at {order.paidAt}</MessageBox>:
                            <MessageBox variant ="danger">Not Paid</MessageBox>}
                        </div>
                    </li>
                    <li>
                        <div className='card card-body'>
                            <h2>Order Items</h2>
                            <ul>{order.orderItems.map((item)=>(
                    <li key={item.product}>
                        <div className="row">
                            <div>
                                <img src = {item.image} alt={item.image} className="small"></img>
                            </div>
                            <div className="min-30">
                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                            </div>

                            <div>{item.qty} x ${item.price} = ${item.qty * item.price} </div>
                        </div>
                    </li>
                ))
            }

                    </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='col-1'>
                <div className='card card-body'>
                    <ul>
                        <li>
                            <h2>Order Summary</h2>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Items</div>
                                <div>${order.itemsPrice}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Shipping</div>
                                <div>${order.shippingPrice}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Tax</div>
                                <div>${order.taxPrice}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div><strong>Total</strong></div>
                                <div>${order.totalPrice}</div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    </div>
  )
}
