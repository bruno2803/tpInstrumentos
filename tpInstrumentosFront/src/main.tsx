import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DondeEstamos } from './components/screens/DondeEstamos/DondeEstamos'
import { Home } from './components/screens/Home/Home'
import ProductoDetalle from './components/screens/Productos/ProductoDetalle'
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from './components/screens/Productos/Productos'
import { Grilla } from './components/screens/Grilla/Grilla'
import { FormularioInstrumento } from './components/screens/FormularioInstrumento/FormularioInstrumento'
import { CarritoContextProvider } from './context/CarritoContext'
import { Carrito } from './components/screens/Carrito/Carrito'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <CarritoContextProvider>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/dondeEstamos' element={<DondeEstamos />}/>
      <Route path='/productos' element={<Productos />}/>
      <Route path='/productoDetalle/:id' element={<ProductoDetalle/>}/>
      <Route path='/grilla' element={<Grilla />}/>
      <Route path='/FormularioInstrumento/:id' element={<FormularioInstrumento />}/>
      <Route path="/carrito" element={<Carrito />}></Route>
    </Routes>
    </CarritoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
