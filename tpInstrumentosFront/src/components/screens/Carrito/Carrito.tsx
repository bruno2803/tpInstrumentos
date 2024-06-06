import { useEffect, useState } from "react";
import { useCarrito } from "../../../hooks/useCarrito";
import Instrumento from "../../../entities/Instrumento";
import Pedido from "../../../entities/Pedido";
import PedidoDetalle from "../../../entities/PedidoDetalle";
import { getAllInstrumentos, getAllPedidos, savePedido, savePedidoDetalle } from "../../../services/FuncionesApi";
import { Button } from "@mui/material";
import ItemCarrito from "../../ui/ItemCarrito/ItemCarrito";
import { Header } from "../../ui/Header/Header";
import "../../../styles/styles.css";


export const Carrito = () => {
  const { cart, limpiarCarrito } = useCarrito();
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const [pedid, setPedidos] = useState<Pedido[]>([]);
  const [instrumentosCoincidentes, setInstrumentosCoincidentes] = useState<
    Instrumento[]
  >([]);
  const pedido = new Pedido();
  const detalles: PedidoDetalle[] = [];

  const getInstrumentos = async () => {
    const datos: Instrumento[] = await getAllInstrumentos();
    setInstrumentos(datos);
  };

  const getPedidos = async () => {
    const datos: Pedido[] = await getAllPedidos();
    setPedidos(datos);
  };

  const Envios = () => {
    EncontrarCoincidencias();
    CrearDetalle();
    CrearPedidos();
  };

  const encontrarInstrumentosComunes = (
    instrumentos: Instrumento[],
    cart: Instrumento[]
  ): Instrumento[] => {
    return cart.filter((instrumento) =>
      instrumentos.some(
        (instrumentoItem) => instrumentoItem.id === instrumento.id
      )
    );
  };
  const EncontrarCoincidencias = () => {
    const instrumentosCoincidentes = encontrarInstrumentosComunes(
      instrumentos,
      cart
    );
    setInstrumentosCoincidentes(instrumentosCoincidentes);
  };

  const CrearDetalle = () => {
    instrumentosCoincidentes.forEach((instrumento: Instrumento) => {
      const detalle = new PedidoDetalle();
      detalle.cantidad = instrumento.cantidad;
      detalle.instrumento = instrumento;
      detalles.push(detalle);
      console.log(detalle);
      savePedidoDetalle(detalle);
    });
  };

  const CrearPedidos = () => {
    pedido.fecha = new Date();
    pedido.totalPedido = SacarTotal();
    console.log(pedido);

    EnviarPedido();
  };

  const EnviarPedido = () => {
    if (pedido.fecha == undefined) {
      return;
    }
    if (pedido.id == undefined) {
      return;
    }
    if (pedido.totalPedido == undefined || pedido.totalPedido == 0) {
      return;
    }
    console.log("Pedido enviado");
    alert("Pedido " + pedido.id + " enviado con éxito");
    savePedido(pedido);
    limpiarCarrito();
  };

  function SacarTotal() {
    let resultado: number = 0;
    instrumentosCoincidentes.forEach((instru: Instrumento) => {
      resultado += instru.precio * instru.cantidad;
    });
    return resultado;
  }

  useEffect(() => {
    getInstrumentos();
  }, []);

  return (
    <>
      <Header/>
      <div className="containerCarrito" style={{ marginTop: '100px' }}>
        <div className={cart.length > 0 ? "divVisible" : "divInvisible"}>
          <Button
            variant="outlined"
            size="small"
            style={{ marginLeft: "auto" }}
            onClick={limpiarCarrito}
          >
            Vaciar carrito
          </Button>
          <Button
            variant="outlined"
            size="small"
            style={{ marginLeft: "auto" }}
            onClick={Envios}
          >
            Enviar Pedido
          </Button>
        </div>
      </div>
      {cart.length === 0 ? (
        <h3 className="h3">El carrito está vacío</h3>
      ) : (
        cart.map((instru: Instrumento) => (
          <ItemCarrito
            key={instru.id}
            id={instru.id}
            instrumento={instru.instrumento}
            marca={instru.marca}
            modelo={instru.modelo}
            imagen={instru.imagen}
            precio={instru.precio}
            costoEnvio={instru.costoEnvio}
            cantidadVendida={instru.cantidadVendida}
            descripcion={instru.descripcion}
            InstrumentoObject={instru}
            cantidad={instru.cantidad}
          ></ItemCarrito>
        ))
      )}
    </>
  );
};
