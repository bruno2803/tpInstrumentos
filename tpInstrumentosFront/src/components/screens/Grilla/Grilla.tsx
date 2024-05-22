import { Button } from "react-bootstrap"
import { Header } from "../../ui/Header/Header"
import { SetStateAction, useEffect, useState } from "react";
import Instrumento from "../../../entities/Instrumento";
import Categorias from "../../../entities/Categoria";
import { deleteInstrumento, getAllCategorias, getAllInstrumentos } from "../../../services/FuncionesApi";


export const Grilla = () => {

    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    const [categorias, setCategorias] = useState<Categorias[]>([]);
    {
        /*Nota: Primero correr Json server con npm run server*/
    }
    const getInstrumentos = async () => {
        const datos: Instrumento[] = await getAllInstrumentos();
        setInstrumentos(datos);
    };

    const getCategorias = async () => {
        const datos: Categorias[] = await getAllCategorias();
        setCategorias(datos);
    };
    const deleteInstru = async (idInstru: number) => {
        deleteInstrumento(idInstru);
        window.location.reload();
    };

    useEffect(() => {
        getInstrumentos();
        getCategorias();
    }, []);

    const [categoriaFiltro, setCategoriaFiltro] = useState("");

    const handleChangeCategoria = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setCategoriaFiltro(e.target.value);
    };

    const filteredInstrumentos = categoriaFiltro
        ? instrumentos.filter(
            (instrumento) => instrumento.categoria.denominacion === categoriaFiltro
        )
        : instrumentos;



    return (
        <>
            <Header />
            <div className="grillaContainer">
                <div className="btnAgregar">
                    <Button variant="primary"><span className="material-symbols-outlined">add</span></Button>
                </div>
                <div className="tabla">
                    <div className="row">
                        <div className="col">
                            <b>ID</b>
                        </div>
                        <div className="col">
                            <b>Nombre</b>
                        </div>
                        <div className="col">
                            <b>Marca</b>
                        </div>
                        <div className="col">
                            <b>Modelo</b>
                        </div>
                        <div className="col">
                            <b>Categoría</b>
                        </div>
                        <div className="col">
                            <b>Precio</b>
                        </div>
                        <div className="col">
                            <b>Envio</b>
                        </div>
                        <div className="col">
                            <b>Modificar</b>
                        </div>
                        <div className="col">
                            <b>Eliminar</b>
                        </div>
                    </div>
                    <div className="grilla">
                        {filteredInstrumentos.map((ins: Instrumento) => (
                            <div className="row" key={ins.id}>
                                <div className="col">{ins.id}</div>
                                <div className="col">{ins.instrumento}</div>
                                <div className="col">{ins.marca}</div>
                                <div className="col">{ins.modelo}</div>
                                <div className="col">{ins.categoria.denominacion}</div>
                                <div className="col">{ins.precio}</div>
                                <div className="col">{ins.costoEnvio}</div>
                                <div className="col">
                                    <a
                                        className="btn btn-info"
                                        style={{ marginLeft: 15 }}
                                        href={`/Agregar/` + ins.id}
                                    >
                                        <span className="material-symbols-outlined">edit</span>
                                    </a>
                                </div>
                                <div className="col">
                                    <a
                                        className="btn btn-danger"
                                        onClick={() => deleteInstru(ins.id)}
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
