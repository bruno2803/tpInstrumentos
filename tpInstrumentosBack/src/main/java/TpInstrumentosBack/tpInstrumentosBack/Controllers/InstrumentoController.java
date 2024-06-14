package TpInstrumentosBack.tpInstrumentosBack.Controllers;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Instrumento;
import TpInstrumentosBack.tpInstrumentosBack.Functions.FuncionApp;
import TpInstrumentosBack.tpInstrumentosBack.Gestor.ChartManager;
import TpInstrumentosBack.tpInstrumentosBack.Services.InstrumentoServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/instrumentos")
public class InstrumentoController extends BaseControllerImpl<Instrumento, InstrumentoServiceImpl>{

    @GetMapping("DataLine")
    public List<List<Object>> getDataChartLine() throws SQLException {
        List<List<Object>> data = new ArrayList<>();
        data.add(Arrays.asList("Articulo", "Precio Compra", "Precio Venta"));

        ChartManager mChart = new ChartManager();
        ResultSet rs = mChart.getDatosChart();
        while (rs.next()) {
            data.add(Arrays.asList(rs.getString("instrumento"), FuncionApp.getFormatNumberToDecimal(rs.getDouble("montoCompra")), FuncionApp.getFormatNumberToDecimal(rs.getDouble("montoVenta"))));
        }
        return data;
    }

    @GetMapping("DataTorta")
    public List<List<Object>> getDataChartPie() throws SQLException {
        List<List<Object>> data = new ArrayList<>();
        data.add(Arrays.asList("Articulo", "Cantidad"));

        ChartManager mChart = new ChartManager();
        ResultSet rs = mChart.getDatosChart();
        while (rs.next()) {
            data.add(Arrays.asList(rs.getString("instrumento"), rs.getInt("cantidad_vendida")));
        }
        return data;
    }
}
