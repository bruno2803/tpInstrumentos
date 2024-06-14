package TpInstrumentosBack.tpInstrumentosBack.Gestor;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Instrumento;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

@Service
public class ExcelService {

    public void exportToExcel(List<Instrumento> instrumentos, OutputStream outputStream) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Instrumentos");

        // Crear el encabezado
        String[] headers = {"Instrumento", "Marca", "Modelo", "Precio", "Costo", "Costo Envío", "Cantidad Vendida", "Descripción", "Categoría"};
        Row headerRow = sheet.createRow(0);
        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
        }

        // Llenar los datos de los instrumentos
        int rowNum = 1;
        for (Instrumento instrumento : instrumentos) {
            Row row = sheet.createRow(rowNum++);

            row.createCell(0).setCellValue(instrumento.getInstrumento());
            row.createCell(1).setCellValue(instrumento.getMarca());
            row.createCell(2).setCellValue(instrumento.getModelo());
            row.createCell(3).setCellValue(instrumento.getPrecioString());
            row.createCell(4).setCellValue(instrumento.getcostoString());
            row.createCell(5).setCellValue(instrumento.getCostoEnvio());
            row.createCell(6).setCellValue(instrumento.getCantidadVendida());
            row.createCell(7).setCellValue(instrumento.getDescripcion());
            row.createCell(8).setCellValue(instrumento.getCategoria().toString());
        }

        // Escribir el archivo en el OutputStream
        workbook.write(outputStream);
        workbook.close();
    }
}
