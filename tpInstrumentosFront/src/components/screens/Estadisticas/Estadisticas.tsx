import { useEffect, useState } from "react";
import { Header } from "../../ui/Header/Header"
import { getDatosLinea, getDatosTorta } from "../../../services/FuncionesApi";
import Chart from "react-google-charts";

export const optionsPie = {
    title: "ARTICULOS EN VENTA",
};

export const optionsLine = {
   title: "COMPRAS VS VENTAS",
   curveType: "function",
   legend: { position: "bottom" },
};

export const Estadisticas = () => {

    const [datosChartLine, setDatosChartLine] = useState<any>();
    const [datosChartPie, setDatosChartPie] = useState<any>();
  
    const getLineChart = async () => {
      const datosBackend = await getDatosLinea();
      console.log(datosBackend);
      setDatosChartLine(datosBackend);
    };
  
    const getPieChart = async () => {
      const datosBackend = await getDatosTorta();
      console.log(datosBackend);
      setDatosChartPie(datosBackend);
    };
  
    useEffect(() => {
      getLineChart();
      getPieChart();
    }, []);

  return (
    <>
    <Header />
      <div className="contanierEstadisticas">
        <Chart
          chartType="PieChart"
          data={datosChartPie}
          options={optionsPie}
          width={"700px"}
          height={"700px"}
        />
        <Chart
          chartType="LineChart"
          data={datosChartLine}
          options={optionsLine}
          width="700px"
          height="700px"
        />
      </div>
    </>    
  )
}
