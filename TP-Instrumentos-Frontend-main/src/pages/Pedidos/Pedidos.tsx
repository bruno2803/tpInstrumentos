import { useEffect, useState } from "react";
import styles from "./Pedidos.module.css";
import { ItemPedido } from "../../components/ui/ItemPedido/ItemPedido";
import { Pedido } from "../../types/Pedido";
import { getAllPedido } from "../../services/PedidoApi";
import { Box } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import GenerateExcel from "../../components/GenerateExcel/GenerateExcel";

export const Pedidos = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const { isAuthenticated, role } = useAuth();
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const getPedidos = async () => {
    const datos: Pedido[] = await getAllPedido();
    setPedidos(datos);
  };

  useEffect(() => {
    getPedidos();
  }, []);
  return (
    <>
      <Box sx={{marginTop:'10px', marginLeft:'32%'}}>
          {isAuthenticated && (role == "DEVELOPER" || role == "ADMIN") && (
            <Box>
              <div className={styles.excelSection}>
                <Box>
                  <div className={styles.dateInputContainer}>
                    <label className={styles.dateLabel} htmlFor="startDate">
                      Desde:
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className={styles.dateInput}
                    />
                  </div>
                </Box>
                <Box>
                  <div className={styles.dateInputContainer}>
                    <label className={styles.dateLabel} htmlFor="endDate">
                      Hasta:
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className={styles.dateInput}
                    />
                  </div>
                </Box>
                <Box>
                  <GenerateExcel startDate={startDate} endDate={endDate} />
                </Box>
              </div>
            </Box>
          )}
        </Box>
      <div className={styles.containerItemPedido}>
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
