import { useEffect, useState } from "react";
import Instrumento from "../../../entities/Instrumento";
import { getAllInstrumentos } from "../../../services/FuncionesApi";
import ItemInstrumento from "../../ui/ItemInstrumento/ItemInstrumento";
import { Header } from "../../ui/Header/Header";



function Productos() {   
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    
    const getInstrumentos = async () => {
      const datos: Instrumento[] = await getAllInstrumentos();
      setInstrumentos(datos);
    }

    useEffect(() => {
      getInstrumentos();
    }, []);


    return (
        <>
        <div>
        <Header />
        </div>
        <div className='cards-container'>
          <div>
          {instrumentos.map((ins:Instrumento) => 
                <ItemInstrumento key={ins.id} id={ins.id} instrumento={ins.instrumento} precio={ins.precio} costoEnvio={ins.costoEnvio} marca={ins.marca} modelo={ins.modelo} imagen={ins.imagen} cantidadVendida={ins.cantidadVendida} descripcion={ins.descripcion}></ItemInstrumento>
               )}
          </div>
        </div>
        </>
      )
}
    
export default Productos