import Instrumento from "../../../entities/Instrumento";
import { useCarrito } from "../../../hooks/useCarrito";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "../../../styles/styles.css";

type InstrumentoParams = {
  id: number;
  instrumento: string;
  marca: string;
  modelo: string;
  imagen: string;
  precio: number;
  costoEnvio: string;
  cantidadVendida: string;
  descripcion: string;
  cantidad: number;
  InstrumentoObject: Instrumento;
};

function ItemCarrito(args: InstrumentoParams) {
  const text =
    args.costoEnvio === "G"
      ? "Envio gratis a todo el pais"
      : `Costo de envio al interior de Argentina $${args.costoEnvio}`;

  const { cart, removeCarrito, addCarrito, limpiarCarrito, removeItemCarrito } =
    useCarrito();

  const verificaPlatoEnCarrito = (product: Instrumento) => {
    return cart.some((item) => item.id === product.id);
  };

  const isPlatoInCarrito = verificaPlatoEnCarrito(args.InstrumentoObject);
  return (
    <>
      <div className="card mb-3" style={{ width: "600px", marginTop: "20px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={args.imagen}
              className="img-fluid rounded-start"
              alt="..."
              style={{width:'500px'}}
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{args.instrumento}</h5>
              <h5 className="card-text">${args.precio}</h5>
              <p className="card-text">
                <small className="text-body-secondary">{text}</small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {args.cantidadVendida} vendidos
                </small>
              </p>

              <a
                className="btn btn-primary"
                onClick={() => removeItemCarrito(args.InstrumentoObject)}
                style={{ marginRight: "5px" }}
              >
                <RemoveIcon />
              </a>
              <a
                className="btn btnBorrarItemBackG"
                onClick={() => {
                  isPlatoInCarrito
                    ? removeCarrito(args.InstrumentoObject)
                    : addCarrito(args.InstrumentoObject);
                }}
              >
                <span className="material-symbols-outlined btnBorrarItemColor">delete</span>
              </a>
              <a
                className="btn btn-primary"
                onClick={() => addCarrito(args.InstrumentoObject)}
                style={{ marginLeft: "5px" }}
              >
                <AddIcon />
              </a>
              <p className="card-text">
                <small className="text-body-secondary">
                  Cantidad en el carrito: {args.cantidad}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCarrito;
