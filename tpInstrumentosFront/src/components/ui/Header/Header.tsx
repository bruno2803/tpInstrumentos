import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useCarrito } from "../../../hooks/useCarrito";
import { useState } from "react";
import Usuario from "../../../entities/Usuario";
import { useNavigate } from "react-router-dom";
import { Roles } from "../../../entities/Roles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Header = () => {

  const { cart } = useCarrito();
  const navigate = useNavigate();

  let tiene: boolean = false;
  if (cart.length >= 1) {
    tiene = true;
  }

  const cerrarSesion = async () => {
    localStorage.setItem("usuario", "");
    localStorage.removeItem("usuario");
    navigate("/Home", {
      replace: true,
      state: {
        logged: false,
      },
    });
    window.location.reload();
  };
  
  const [jsonUsuario] = useState<any>(localStorage.getItem("usuario"));
  console.log("JSON " + jsonUsuario);
  const usuarioLogueado: Usuario = JSON.parse(jsonUsuario) as Usuario;

  const esVisitante = !usuarioLogueado;
  const usuario = usuarioLogueado?.usuario || "";
  
  return (
    <>
      <div className="headerContainer">
        <Navbar
          expand="lg"
          className="bg-body-tertiary navbar"
          bg="dark"
          data-bs-theme="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="/home">HOME</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/dondeEstamos">¿Donde estamos?</Nav.Link>
                <Nav.Link href="/productos">Productos</Nav.Link>
                <Nav.Link href="/grilla">Grilla</Nav.Link>
                <Nav.Link href="/pedidos">Pedidos</Nav.Link>
                <Nav.Link href="/estadisticas">Estadisticas</Nav.Link>
                <Nav.Link style={{marginLeft:'370px'}}>
                  Usuario: {usuario} {esVisitante ? "Visitante" : ""}
                </Nav.Link>
                <Nav.Link onClick={cerrarSesion} > <AccountCircleIcon /></Nav.Link>
                <Nav.Link href="/carrito">
                <span className="material-symbols-outlined">shopping_cart</span>
                {tiene && (
                <span className="position-absolute top-1 start-10 translate-middle badge rounded-pill bg-danger">
                !
                </span>)}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
