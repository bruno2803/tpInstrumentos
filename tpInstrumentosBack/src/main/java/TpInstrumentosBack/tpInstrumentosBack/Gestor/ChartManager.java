package TpInstrumentosBack.tpInstrumentosBack.Gestor;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class ChartManager {

    String urlConexion = "jdbc:mysql://localhost:3306/InstrumentosDB";
    String usuario = "root";
    String clave = "Bocajuniors2803!";


    public ResultSet getDatosChart(){

        ResultSet rs = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);

            Statement s = conexion.createStatement();

            // Se realiza la consulta. Los resultados se guardan en el
            // ResultSet rs
            rs = s.executeQuery("SELECT instrumento, SUM(cantidad_vendida) AS cantidad_vendida, SUM(costo * 0.8) montoCompra, SUM(costo) montoVenta " +
                    "FROM instrumento GROUP BY instrumento HAVING cantidad_vendida > 1 ORDER BY instrumento");

        } catch (Exception e) {
            e.printStackTrace();
        }
        return rs;


    }
}
