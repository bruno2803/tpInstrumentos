import { useEffect, useState } from "react";
import { getInstrumentosJSON } from "../services/FuncionesApi";
import ItemInstrumento from "./ItemInstrumento";
import Instrumento from "../entities/Instrumento";
import "../styles/styles.css"

function Instrumentos() {   
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    
    const getInstrumentos = () => {
      let datos:Instrumento[] = getInstrumentosJSON();
      setInstrumentos(datos);
    }

    useEffect(() => {
      getInstrumentos();
    }, []);

    function parseBoolean(value: string): boolean {
      return value === 'true';
    }

    return (
        <>
        <div className='cards-container'>
          <div>
          {instrumentos.map((ins:Instrumento) => 
                <ItemInstrumento key={ins.id} id={ins.id} instrumento={ins.instrumento} precio={ins.precio} costoEnvio={ins.costoEnvio} modelo={ins.modelo} imagenInstrumento={ins.imagenPath} cantidadVendida={ins.cantidadVendida} descripcion={ins.descripcion} initialEnvio={parseBoolean(ins.initialEnvio)}></ItemInstrumento>
               )}
          </div>
        </div>
        </>
      )
}
    
export default Instrumentos
