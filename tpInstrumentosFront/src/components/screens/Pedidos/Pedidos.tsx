import { useEffect, useState } from "react";
import Pedido from "../../../entities/Pedido";
import { getAllPedidos } from "../../../services/FuncionesApi";
import "../../../styles/styles.css"
import { ItemPedido } from "../../ui/ItemPedido.tsx/ItemPedido";
import { Header } from "../../ui/Header/Header";
import "../../../styles/styles.css";

export const Pedidos = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const getPedidos = async () => {
    const datos: Pedido[] = await getAllPedidos();
    setPedidos(datos);
  };

  useEffect(() => {
    getPedidos();
  }, []);
  return (
    <>
      <Header />
      <div className={pedidos.length < 1 ? "divVisible" : "divInvisible"} style={{ marginTop: '80px' }}>
        <h3 className="titleSinPedidos">No tienes pedidos realizados</h3>
      </div>
      <div className="containerItemPedido">
      {pedidos.map((ped: Pedido) => (
        <ItemPedido
          id={ped.id}
          fecha={ped.fecha}
          totalPedido={ped.totalPedido}
          titulo={ped.titulo}
        ></ItemPedido>
      ))}
      </div>
    </>
  );
};
