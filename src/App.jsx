import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import Form from './components/Form';
import ShoppingCartProvider from './context/ShoppingCartContext';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';



const App = () => {


  return (
    // <>
    // <ShoppingCartProvider>
    // <ComponentA/>
    // <ComponentB/>
    // </ShoppingCartProvider>
    // </>
 <BrowserRouter>
<NavBar />
<Routes>
<Route exact path ='/' element={<Home />}/>
<Route exact path ='/cart' element={<Cart/>} />
<Route exact path ='/product/:id' element={<ItemDetailContainer/>} />
<Route exact path ='/category/:category' element={<ItemListContainer/>} />
<Route exact path ='/category/' element={<ItemListContainer/>} />
<Route exact path ='/form' element={<Form/>} />

  </Routes>
  </BrowserRouter>  
 )
}

export default App;
