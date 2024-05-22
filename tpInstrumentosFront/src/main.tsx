import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DondeEstamos } from './components/screens/DondeEstamos/DondeEstamos'
import { Home } from './components/screens/Home/Home'
import ProductoDetalle from './components/screens/Productos/ProductoDetalle'
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from './components/screens/Productos/Productos'
import { Grilla } from './components/screens/Grilla/Grilla'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/dondeEstamos' element={<DondeEstamos />}/>
      <Route path='/productos' element={<Productos />}/>
      <Route path='/productoDetalle/:id' element={<ProductoDetalle/>}/>
      <Route path='/grilla' element={<Grilla />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
