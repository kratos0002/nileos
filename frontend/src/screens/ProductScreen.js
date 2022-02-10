import React from 'react'
import data from '../data'
import Rating from '../components/Rating'
import {useParams} from 'react-router-dom'

export default function ProductScreen(props){
    const params = useParams()
    const {id} = params
    console.log(id)
    const product = data.products.find(x=>x._id===id)
    if(!product){
        return (
        <div>
            Product Not found
        </div>)
    }
    return(
        <div>
           <div className="row">
               <div className="col-2">
                   <img className ="large" src={product.image} alt ={product.name}></img>
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
                               ( <span className="error">Unavailable</span>)}
                            </div>
                        </div>
                        </li>
                        <li>
                            <button className="primary block">
                                Add to Cart
                            </button>
                        </li>
                    </ul>

                </div>
           </div>
        </div>
    )
}