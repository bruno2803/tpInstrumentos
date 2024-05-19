import { useEffect, useState } from "react";
import ItemInstrumento from "./ItemInstrumento";
import Instrumento from "../entities/Instrumento";
import "../styles/styles.css"
import { getAllInstrumentos } from "../services/FuncionesApi";

function Instrumentos() {   
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    
    const getInstrumentos = async () => {
      const datos: Instrumento[] = await getAllInstrumentos();
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
                <ItemInstrumento key={ins.id} id={ins.id} instrumento={ins.instrumento} precio={ins.precio} costoEnvio={ins.costoEnvio} marca={ins.marca} modelo={ins.modelo} imagen={ins.imagen} cantidadVendida={ins.cantidadVendida} descripcion={ins.descripcion} initialEnvio={parseBoolean(ins.initialEnvio)}></ItemInstrumento>
               )}
          </div>
        </div>
        </>
      )
}
    
export default Instrumentos
