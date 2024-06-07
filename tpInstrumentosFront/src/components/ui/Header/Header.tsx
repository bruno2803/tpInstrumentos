import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useCarrito } from "../../../hooks/useCarrito";

export const Header = () => {

  const { cart } = useCarrito();

  let tiene: boolean = false;
  if (cart.length >= 1) {
    tiene = true;
  }
  
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
                <Nav.Link href="/carrito" style={{marginLeft:'650px'}}>
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
