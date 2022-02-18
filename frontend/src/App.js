import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter,Link, Route, Routes} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import SigninScreen from './screens/SigninScreen';

function App() {

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart

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
          
          <Link to="/signin">SIGN IN</Link>
      </div>

  </header>
  <main>
    <Routes>
    <Route path='/product/:id' element={<ProductScreen />}></Route>
    <Route path='/' element={<HomeScreen />}></Route>
    <Route path='/cart/:id' element={<CartScreen />}></Route>
    <Route path='/cart' element={<CartScreen />}></Route>
    <Route path='signin' element={<SigninScreen />}></Route>
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
