import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Instrumentos from './components/screens/Productos/Productos'
import { DondeEstamos } from './components/screens/DondeEstamos/DondeEstamos'
import { Home } from './components/screens/Home/Home'
import ProductoDetalle from './components/screens/Productos/ProductoDetalle'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/dondeEstamos' element={<DondeEstamos />}/>
      <Route path='/productos' element={<Instrumentos />}/>
      <Route path='/productoDetalle/:id' element={<ProductoDetalle/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
