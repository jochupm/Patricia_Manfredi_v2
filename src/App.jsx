import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Cart} from './components/Cart';
import Home from './components/Home';
import CartProvider from './provider/CartProvider';
import Payment from './components/Payment';
import NoResultPage from './components/NoResultsPage';
import Footer from './components/Footer';
import CursoListContainer from './components/CursoListContainer';
import CursoDetailContainer from './components/CursoDetailContainer';
import MoldetecaDetailContainer from './components/MoldetecaDetailContainer';
import MoldetecaListContainer from './components/MoldetecaListContainer';
import QuienesSomos from './components/QuienesSomos';
import BlogList from './components/BlogList';
import BlogDetailContainer from './components/BlogDetailContainer'
import Contacto from './components/Contacto';
// import CursoDetail from './components/CursoDetail';

function App() {
  return (
      <div className="d-flex flex-column min-vh-100">
          <BrowserRouter>
              <CartProvider>
                  <NavBar />
                  <main className="flex-grow-1">
                      <Routes>
                          <Route exact path="/" element={<Home />} />
                          <Route exact path="/moldeteca/:category" element={<MoldetecaListContainer />} />
                          <Route exact path="/moldeteca/category/" element={<MoldetecaListContainer />} />
                          <Route exact path="/moldeteca/:id" element={<MoldetecaDetailContainer />} />

                          <Route exact path="/category/:category" element={<CursoListContainer />} />
                          <Route exact path="/category/" element={<CursoListContainer />} />
                          <Route exact path="/cursos/:id" element={<CursoDetailContainer />} />

                          <Route exact path="/quienes-somos" element={<QuienesSomos />} />

                          <Route exact path="/blog" element={<BlogList />} />
                          <Route exact path="/blog/:id" element={<BlogDetailContainer />} />

                        <Route exact path="/contacto" element={<Contacto/>}/>

                          <Route exact path="/cart" element={<Cart />} />

                          <Route exact path="/payment" element={<Payment />} />

                          <Route exact path="/error" element={<NoResultPage />} />

                      </Routes>
                  </main>
                  <Footer />
              </CartProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;
