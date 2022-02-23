import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentMethodScreen(props) {

    const cart = useSelector(state=> state.cart)
    const {shippingAddress} = cart
    const navigate = useNavigate()

    useEffect(()=>{
        if(!shippingAddress.address){
            navigate('/shipping')
        }
    },[shippingAddress, navigate])

    const [paymentMethod, setPaymentMethod] = useState('Paypal')
    const dispatch = useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')


    }
  return (
    <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <form className='form' onSubmit={submitHandler}>
            <div>
                <h1>Payment Method</h1>
            </div>
            <div>
                <div>
                    <input type="radio" id="paypal" value ="Paypal" 
                    name ="paymentmethod" required checked onChange={(e)=> setPaymentMethod(e.target.value)}></input>
                    <label htmlFor="paypal">PayPal</label>
                </div>
                <div>
                    <input type="radio" id="stripe" value ="Stripe" 
                    name ="paymentmethod" required onChange={(e)=> setPaymentMethod(e.target.value)}></input>
                    <label htmlFor="strupe">Stripe</label>
                </div>
                <div>
                    <button className='primary' type='submit'>Continue</button>
                </div>
            </div>
        </form>
    </div>
  )
}
