import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signin } from "../actions/userActions";


export default function SigninScreen(props){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const redirect = new URLSearchParams(location.search).get('redirect')? new URLSearchParams(location.search).get('redirect'):'/'

    console.log(redirect)

    const userSignin = useSelector(state=>state.userSignin)
    const {userInfo, loading, error} = userSignin

    const dispatch = useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(signin(email, password))
        //todo signin
    }

    
    useEffect(()=>{
        if(userInfo){
            if(redirect!=='/'){
            navigate(`/${redirect}`)}
            else{
                navigate(redirect)
            }
        }
    },[userInfo, redirect, navigate])

    return(
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter email" required onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Email Address</label>
                    <input type="password" id="password" placeholder="Enter password" required onChange={e=>setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type ="submit">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New Customer? {' '}
                        <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}