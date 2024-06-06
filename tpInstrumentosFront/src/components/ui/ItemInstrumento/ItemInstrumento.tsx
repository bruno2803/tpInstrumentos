import { Button } from "react-bootstrap";
import Instrumento from "../../../entities/Instrumento";
import { useCarrito } from "../../../hooks/useCarrito";

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
    InstrumentoObject: Instrumento;
  }
  
  function ItemInstrumento(args: InstrumentoParams) {
    
    const envio =
    args.costoEnvio === "G"
      ? "Envio gratis a todo el pais"
      : `Costo de envio al interior de Argentina $${args.costoEnvio}`;
    const envioClassName = args.costoEnvio === "G"
      ? 'envioGratis'
      : 'envioPago';

    const { cart, removeCarrito, addCarrito, limpiarCarrito, removeItemCarrito } =
    useCarrito();
  
    const verificaPlatoEnCarrito = (product: Instrumento) => {
      return cart.some((item) => item.id === product.id);
    };
  
    const isPlatoInCarrito = verificaPlatoEnCarrito(args.InstrumentoObject);
  
    return (
      <>
          <div className="card">
            <div className="card-box-image">
              <img src={args.imagen} alt={args.imagen} className='card-img' />
            </div>
            <div className="card-body">
              <h5 className="card-title">{args.instrumento}({args.modelo})</h5>
              <p className="card-price">${args.precio}</p>
              <p className={envioClassName}> <span className="material-symbols-outlined span">local_shipping</span> {envio}</p>
              <p className="card-description">{args.cantidadVendida} vendidos</p>
            </div>
            <div className="card-button">
              <Button style={{margin:'5px', border:'none'}} href={`productoDetalle/${args.id}`}>Ver detalle</Button>
              <Button 
              style={{color:'#0d6efd', background:'#e3edfb', border:'none'}}
              onClick={() => {
                isPlatoInCarrito
                  ? removeCarrito(args.InstrumentoObject)
                  : addCarrito(args.InstrumentoObject);
              }}>
                {isPlatoInCarrito ? (
                  <span className="material-symbols-outlined">remove_shopping_cart</span>
                ) : (
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                )}
              </Button>
            </div>
          </div>
      </>
    )
  }
  
  export default ItemInstrumento