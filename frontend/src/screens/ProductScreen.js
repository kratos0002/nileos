import React, { useEffect, useState } from 'react'
import Rating from '../components/Rating'
import {useParams, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import { detailsProduct } from '../actions/productActions'
import { useNavigate } from 'react-router-dom';
 


export default function ProductScreen(props){
    const params = useParams()
    const {id} = params
    const navigate = useNavigate()
    console.log(id)
    const [qty, setQty] =useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector((state)=>state.productDetails)
    console.log(productDetails)
    const{ loading, error, product } = productDetails

    useEffect(()=>{
        dispatch(detailsProduct(id))
    },[dispatch, id])

    const addToCartHandler = () =>{
        navigate(`/cart/${id}?qty=${qty}`)
    }

    return(
        <div>
        {loading ? ( <LoadingBox> </LoadingBox> ) : 
        error ? (<MessageBox variant="danger">{error}</MessageBox>):
        (
        <div>
            <Link to="/">Back to Home</Link>
           <div className="row top">
               <div className="col-2">
                   <img className ="medium" src={product.image} alt ={product.name} />
               </div>
               <div className="col-1">
                   <ul>
                       <li>{product.name}</li>
                       <li>
                       <Rating rating={product.rating}
                                numReviews={product.numReviews}
                                >
                       </Rating>
                       </li>
                       <li>
                           Price: ${product.price}
                       </li>
                       <li>
                           description:
                           <p>{product.description}</p>
                       </li>
                   </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body"></div>
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">${product.price}</div>
                            </div>
                        </li>
                        <li>
                        <div className="row">
                            <div>status</div>
                            <div>
                                {product.countInStock>0? (<span className="success">In Stock</span>):
                               ( <span className="danger">Unavailable</span>)}
                            </div>
                        </div>
                        </li>
                        {
                            product.countInStock > 0 &&(
                                <>
                                <li>
                                    <div className='row'>
                                        <div>
                                            Qty
                                        </div>
                                        <div>
                                           <select value={qty} onChange={e=> setQty(e.target.value)}>
                                               {
                                                   [...Array(product.countInStock).keys()].map(x=>(
                                                       <option key={x+1} value={x+1}>{x+1}</option>
                                                   ))
                                               }
                                           </select>
                                        </div>
                                    </div>
                                </li>
                                <li>
                            <button onClick={addToCartHandler} className="primary block">
                                Add to Cart
                            </button>
                            </li> 
                                </>

                            )
                        }

                    </ul>

                </div>
           </div>   
             </div>)}
        </div>)
}