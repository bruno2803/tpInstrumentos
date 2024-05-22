import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../../ui/Header/Header";
import Instrumento from "../../../entities/Instrumento";
import { getOneInstrumento } from "../../../services/FuncionesApi";

export const ProductoDetalle = () => {

    const { id } = useParams();
    const [args, setInstrumento] = useState<Instrumento>();
    const getInstrumento = async () => {
        const instrumentoSelect: Instrumento = await getOneInstrumento(
            Number(id)
        );
        setInstrumento(instrumentoSelect);
    };
    useEffect(() => {
        getInstrumento();
    }, []);

    const envio =
    args?.costoEnvio === "G"
      ? "Envio gratis a todo el pais"
      : `Costo de envio al interior de Argentina $${args?.costoEnvio}`;
    const envioClassName = args?.costoEnvio === "G"
      ? 'envioGratis'
      : 'envioPago';


    return (
        <>
            <Header />
            <div className="card-productoDetalle">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={args?.imagen}
                            className="img-fluid rounded-start"
                            alt="..."
                        ></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{args?.instrumento}</h5>
                            <h5 className="card-text">${args?.precio}</h5>
                            <p className="card-text">
                                <b>Descripcion: </b>
                                {args?.descripcion}
                            </p>
                            <p className={envioClassName}>
                                <span className="material-symbols-outlined span">local_shipping</span>
                                {envio}
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary">
                                    {args?.cantidadVendida} vendidos
                                </small>
                            </p>
                            <a href="" className="btn btn-primary">
                                Agregar al carrito
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductoDetalle
