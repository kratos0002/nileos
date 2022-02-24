import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, useNavigate } from 'react-router-dom'

export default function PrivateRoute({component: Component, ...rest}) {
    const userSignin = useSelector(state=> state.userSignin)
    const {userinfo} = userSignin
    const navigate = useNavigate()
  return (
      <Route {...rest} render={(props)=> userinfo? (<Component {...props}></Component>):
    (navigate('/signin'))}>

    </Route>

  )
}
