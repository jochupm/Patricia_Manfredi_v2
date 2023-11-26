import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Cart} from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import CartProvider from './provider/CartProvider';
import Payment from './components/Payment';
import NoResultPage from './components/NoResultsPage';


function App () {


  return (


 <BrowserRouter>
 <CartProvider>
<NavBar />
<Routes>
<Route exact path ='/' element={<Home />}/>
<Route exact path ='/category/:category' element={<ItemListContainer/>} />
<Route exact path ='/category/' element={<ItemListContainer/>} />
<Route exact path ='/item/:id' element={<ItemDetailContainer/>} />
<Route exact path ='/cart' element={<Cart/>} />
<Route exact path ='/payment' element={<Payment/>} />
<Route exact path='/error' element={<NoResultPage />}/>

  </Routes>
  </CartProvider>
  </BrowserRouter>  


 )
}

export default App;
