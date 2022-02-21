import React, { useEffect } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import { useNavigate } from 'react-router-dom'
export default function ShippingAddressScreen(props) {
    const userSignin = useSelector(state=> state.userSignin)
    const {userInfo} = userSignin
    const cart = useSelector(state=> state.cart)
    const {shippingAddress} = cart
    const navigate = useNavigate()

    useEffect(()=>{
        if(!userInfo){
            navigate('/signin')
        }
    },[userInfo, navigate])

    const [fullName, SetFullName] = useState(shippingAddress.fullName)
    const [address, SetAddress] = useState(shippingAddress.address)
    const [city, SetCity] = useState(shippingAddress.city)
    const [postalCode, SetPostalCode] = useState(shippingAddress.postalCode)
    const [country, SetCountry] = useState(shippingAddress.country)
  
    const dispatch = useDispatch()
    const submitHandler =(e) =>{
        e.preventDefault()
        dispatch(saveShippingAddress({fullName, address, city, postalCode, country}))
        navigate('/payment')
    }
    

  return (
    <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <form className='form' onSubmit={submitHandler}>
            <div>
                <h1>Shipping Address</h1>
            </div>
            <div>
                <label htmlFor='fullName'>Full Name</label> 
                <input type="text" id="fullName" placeholder='Enter full name' value={fullName} onChange={(e)=>SetFullName(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor='address'>Address</label> 
                <input type="text" id="address" placeholder='Enter address' value={address} onChange={(e)=>SetAddress(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor='city'>City</label> 
                <input type="text" id="city" placeholder='Enter city' value={city} onChange={(e)=>SetCity(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor='postalCode'>Postal Code</label> 
                <input type="text" id="postalCode" placeholder='Enter postalCode' value={postalCode} onChange={(e)=>SetPostalCode(e.target.value)} required></input>
            </div>
            <div>
                <label htmlFor='country'>Country</label> 
                <input type="text" id="country" placeholder='Enter country' value={country} onChange={(e)=>SetCountry(e.target.value)} required></input>
            </div>
            <div>
                <label/>
                <button className='primary' type="submit">Continue</button>
            </div>
        </form>
    </div>
  )
}
