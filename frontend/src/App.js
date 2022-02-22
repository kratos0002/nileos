import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter,Link, Route, Routes} from 'react-router-dom'
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen'
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ProductScreen from './screens/ProductScreen'
import RegisterScreen from './screens/RegistrationScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  const userSignin = useSelector(state=>state.userSignin)
  const {userInfo} = userSignin
  const dispatch = useDispatch()
  const signoutHandler = () =>{
    dispatch(signout())

  }

  return (
    <BrowserRouter>
    <div className="grid-container">
  <header className="row">
      <div>
          <Link className="brand" to="/">NILEOS</Link>
      </div>
      <div>
          <Link to="/cart">CART
          {cartItems.length>0 &&(<span className='badge'>{cartItems.length}</span>)}
          
          </Link>
          {
            userInfo ? (
            <div className='dropdown'>
            <Link to="#">{userInfo.name}<i className='fa fa-caret down'>
              </i></Link>
              <ul className='dropdown-content'>
                <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
              </ul>
            </div>
              ):
                      <Link to="/signin">SIGN IN</Link>

          }
          
      </div>

  </header>
  <main>
    <Routes>
    <Route path='/product/:id' element={<ProductScreen />}></Route>
    <Route path='/' element={<HomeScreen />}></Route>
    <Route path='/cart/:id' element={<CartScreen />}></Route>
    <Route path='/cart' element={<CartScreen />}></Route>
    <Route path='/signin' element={<SigninScreen />}></Route>
    <Route path='/register' element={<RegisterScreen />}></Route>
    <Route path='/shipping' element={<ShippingAddressScreen />}></Route>
    <Route path='/payment' element={<PaymentMethodScreen />}></Route>
    </Routes>
  </main>
  <footer className="row center">
      All rights Reserved
  </footer>
</div>
</BrowserRouter>
   
  );
}

export default App;
