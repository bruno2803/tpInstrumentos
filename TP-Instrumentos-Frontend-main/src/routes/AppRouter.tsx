import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/ui/common/NavBar/NavBar";
import { Home } from "../pages/Home/Home";
import { DondeEstamos } from "../pages/DondeEstamos/DondeEstamos";
import { Productos } from "../pages/Productos/Productos";
import { ProductoDetalle } from "../pages/ProductoDetalle/ProductoDetalle";
import { ProductosTabla } from "../pages/ProductosTabla/ProductosTabla";
import { Carrito } from "../pages/Carrito/Carrito";
import { Login } from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Estadisticas from "../pages/Estadisticas/Estadisticas";
import { Pedidos } from "../pages/Pedidos/Pedidos";

// Componente AppRouter que define las rutas de la aplicación
export const AppRouter = () => {
  return (
    <>
      {/* Barra de navegación */}
      <NavBar />
      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donde-estamos" element={<DondeEstamos />} />
        <Route
          path="/productos"
          element={<PrivateRoute element={<Productos />} />}
        />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route
          path="/productos-tabla"
          element={
            <PrivateRoute
              allowedRoles={["DEVELOPER", "ADMIN", "CLIENTE"]}
              element={<ProductosTabla />}
            />
          }
        />
        <Route
          path="/carrito"
          element={
            <PrivateRoute
              allowedRoles={["DEVELOPER", "CLIENTE","ADMIN"]}
              element={<Carrito />}
            />
          }
        />
        <Route
          path="/pedidos"
          element={
            <PrivateRoute
              allowedRoles={["DEVELOPER", "ADMIN"]}
              element={<Pedidos />}
            />
          }
        />
        <Route
          path="/estadisticas"
          element={
            <PrivateRoute
              allowedRoles={["DEVELOPER", "ADMIN"]}
              element={<Estadisticas />}
            />
          }
        />
      </Routes>
    </>
  );
};
