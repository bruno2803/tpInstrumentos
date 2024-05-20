import { Button } from "react-bootstrap";

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
  }
  
  function ItemInstrumento(args: InstrumentoParams) {
    
    const envio =
    args.costoEnvio === "G"
      ? "Envio gratis a todo el pais"
      : `Costo de envio al interior de Argentina $${args.costoEnvio}`;
    const envioClassName = args.costoEnvio === "G"
      ? 'envioGratis'
      : 'envioPago';
  
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
              <Button variant="primary" className="button" href={`productoDetalle/${args.id}`}>Ver detalle</Button>
            </div>
          </div>
      </>
    )
  }
  
  export default ItemInstrumento