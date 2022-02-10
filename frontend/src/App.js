import React from 'react'
import { BrowserRouter,Link, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {

  return (
    <BrowserRouter>
    <div className="grid-container">
  <header className="row">
      <div>
          <a className="brand" href="/">NILEOS</a>
      </div>
      <div>
          <a href="/cart">CART</a>
          <a href="/signin">SIGN IN</a>
      </div>

  </header>
  <main>
    <Routes>
    <Route path='/product/:id' element={<ProductScreen />}></Route>
    <Route path='/' element={<HomeScreen />}></Route>
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
