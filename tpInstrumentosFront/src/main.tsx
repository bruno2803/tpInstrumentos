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
import { Pedidos } from './components/screens/Pedidos/Pedidos'
import { Login } from './components/screens/Login/Login'
import { RutaPrivada } from './ControlAcceso/RutaPrivada'
import RolUsuario from './ControlAcceso/RolUsuario'
import { Roles } from './entities/Roles'
import { Estadisticas } from './components/screens/Estadisticas/Estadisticas'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <CarritoContextProvider>
    <Routes>
      //RUTAS PUBLICAS
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<Home/>}/>
      <Route index element={<Home />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/dondeEstamos' element={<DondeEstamos />}/>
      //RUTAS PRIVADAS
      <Route 
        path='/productos' 
        element={
          <RutaPrivada>
            <Productos />
          </RutaPrivada>
        }
      />
      <Route 
        path='/productoDetalle/:id' 
        element={
          <RutaPrivada>
            <ProductoDetalle />
          </RutaPrivada>
        }
      />
      <Route 
        path='/grilla' 
        element={
          <RutaPrivada>
            <Grilla />
          </RutaPrivada>
        }
      />
      <Route 
        path='/pedidos' 
        element={
          <RutaPrivada>
            <Pedidos />
          </RutaPrivada>
        }
      />
      <Route 
        path='/carrito' 
        element={
          <RutaPrivada>
            <Carrito />
          </RutaPrivada>
        }
      />
      <Route 
        path='/estadisticas' 
        element={
          <RutaPrivada>
            <Estadisticas/>
          </RutaPrivada>
        }
      />
      //RUTAS PRIVADAS Y CON ROL DE ADMIN
      <Route element={<RolUsuario rol={Roles.ADMIN} />}>
        <Route path="/FormularioInstrumento/:id" element={<FormularioInstrumento />} />
      </Route>
    </Routes>
    </CarritoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
