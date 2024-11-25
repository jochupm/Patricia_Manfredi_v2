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
import CursosDetailContainer from './components/CursosDetailContainer';
import MoldetecaDetailContainer from './components/MoldetecaDetailContainer';
import MoldetecaListContainer from './components/MoldetecaListContainer';
import MerceriaListContainer from './components/MerceriaListContainer';
import QuienesSomos from './components/QuienesSomos';
import Blog from './components/Blog';

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

                          <Route exact path="/cursos/category/:category" element={<CursoListContainer />} />
                          <Route exact path="/cursos/category/" element={<CursoListContainer />} />
                          <Route exact path="/cursos/:id" element={<CursosDetailContainer />} />

                          <Route exact path="/merceria" element={<MerceriaListContainer />} />
                          <Route exact path="/quienes-somos" element={<QuienesSomos />} />
                          <Route exact path="/blog" element={<Blog />} />

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
