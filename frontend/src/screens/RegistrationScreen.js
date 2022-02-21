import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../actions/userActions";


export default function RegisterScreen(props){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const redirect = new URLSearchParams(location.search).get('redirect')? new URLSearchParams(location.search).get('redirect'):'/'

    console.log(redirect)

    const userRegister = useSelector(state=>state.userRegister)
    const {userInfo, loading, info} = userRegister

    const dispatch = useDispatch()
    const submitHandler=(e)=>{

        e.preventDefault()
        if(password!==confirmPassword){
            alert('Password and confirmed password dont match')
        }else{
            dispatch(register(name, email, password))
        }
        dispatch(register(name, email, password))
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
                    <h1>Register</h1>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter Name" required onChange={e=>setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter email" required onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required onChange={e=>setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Enter confirm Password" required onChange={e=>setConfirmPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type ="submit">Register</button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}