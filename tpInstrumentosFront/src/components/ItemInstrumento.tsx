import "../styles/styles.css"

type InstrumentoParams = {
    id: number;
    instrumento: string;
    /*marca: string;*/
    modelo: string;
    imagenInstrumento: string;
    precio: number;
    costoEnvio: string;
    cantidadVendida: string;
    descripcion: string;
    initialEnvio: boolean;
  }
  
  function ItemInstrumento(args: InstrumentoParams) {
    
    const envio = args.initialEnvio ? `Costo de Envio Interior de Argentina: $${args.costoEnvio}` : 'Envio gratis a todo el pais' ;
    const envioClassName = args.initialEnvio
      ? 'envioPago'
      : 'envioGratis';
  
    return (
      <>
          <div className="card">
            <div className="card-box-image">
              <img src={args.imagenInstrumento} alt={args.imagenInstrumento} className='card-img' />
            </div>
            <div className="card-body">
              <h5 className="card-title">{args.instrumento}({args.modelo})</h5>
              <p className="card-price">${args.precio}</p>
              <p className={envioClassName}> <span className="material-symbols-outlined span">local_shipping</span> {envio}</p>
              <p className="card-description">{args.cantidadVendida} vendidos</p>
            </div>
          </div>
      </>
    )
  }
  
  export default ItemInstrumento