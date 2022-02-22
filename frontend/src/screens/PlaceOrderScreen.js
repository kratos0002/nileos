import React from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { cartReducer } from '../reducers/cartReducers'

export default function PlaceOrderScreen() {
  return (
    <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className='row top'>
            <div className='col-2'>
                <ul>
                    <li>
                        <div className='card card-body'>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name:</strong>{cart.shippingAddress.fullName} <br />
                                
                            </p>

                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
