import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { listordermine } from '../actions/orderActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function OrderHistoryScreen(props) {
    const orderMineList = useSelector(state => state.orderMineList)
    const { loading, error, orders } =  orderMineList
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(listordermine())
    },[dispatch])
  return (
    <div>
        <h1>
            Order History
        </h1>
        {loading? <LoadingBox></LoadingBox>:
        error? <MessageBox variant="danger"></MessageBox>:
       (<table className='table'>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>Date</th>
                   <th>Total</th>
                   <th>Paid</th>
                   <th>Delivered</th>
                   <th>Actions</th>
               </tr>
           </thead>
           <tbody>
               {orders.map((order)=>(
                   <tr key={order._id}>
                       <td>{order.createdAt.substring(0,10)}</td>
                       <td>{order.totalPrice}</td>
                       <td>{order.isPaid? order.paidAt.substring(0,10):'No'}</td>
                       <td>{order.isDelivered? order.deliveredAt.substring(0,10):'No'}</td>
                       <td><button type="button" class="small" onClick={()=>navigate(`/order/${order._id}`)}>Details</button></td>
                   </tr>
               ))}
           </tbody>
       </table>




       ) }
    </div>
  )
}
