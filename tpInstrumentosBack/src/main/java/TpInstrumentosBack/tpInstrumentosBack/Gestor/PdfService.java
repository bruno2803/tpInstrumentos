package TpInstrumentosBack.tpInstrumentosBack.Gestor;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Instrumento;
import com.itextpdf.io.font.constants.StandardFonts;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.canvas.draw.ILineDrawer;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.borders.SolidBorder;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.LineSeparator;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Text;
import com.itextpdf.layout.properties.HorizontalAlignment;
import com.itextpdf.layout.properties.UnitValue;
import org.springframework.stereotype.Service;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;


import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Service
public class PdfService {

    public byte[] generatePdf(Instrumento instrumento) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdfDoc = new PdfDocument(writer);
        Document document = new Document(pdfDoc);

        PdfFont titleFont = PdfFontFactory.createFont(StandardFonts.COURIER_BOLD);
        PdfFont font = PdfFontFactory.createFont(StandardFonts.COURIER);

        if (instrumento.getImagen() != null && !instrumento.getImagen().isEmpty()) {
            try {
                ImageData imageData = ImageDataFactory.create(instrumento.getImagen());
                Image image = new Image(imageData);
                image.setHorizontalAlignment(HorizontalAlignment.CENTER);
                image.setWidth(UnitValue.createPercentValue(50)); // Escala la imagen al 50% del ancho de la página
                document.add(image);
            } catch (Exception e) {
                // Manejo de error en caso de que la imagen no pueda ser cargada
                document.add(new Paragraph("Imagen: No se pudo cargar la imagen").setFont(font));
            }
        }

        addInstrumentInfo(document, "INSTRUMENTO", instrumento.getInstrumento(), titleFont, font);
        addInstrumentInfo(document, "CATEGORIA", instrumento.getCategoriaString(), titleFont, font);
        addInstrumentInfo(document, "MARCA", instrumento.getMarca(), titleFont, font);
        addInstrumentInfo(document, "MODELO", instrumento.getModelo(), titleFont, font);
        addInstrumentInfo(document, "PRECIO", String.valueOf(instrumento.getPrecio()), titleFont, font);
        addInstrumentInfo(document, "COSTO DE ENVIO", String.valueOf(instrumento.getCostoEnvio()), titleFont, font);
        addInstrumentInfo(document, "CANTIDAD VENDIDA", String.valueOf(instrumento.getCantidadVendida()), titleFont, font);
        addInstrumentInfo(document, "DESCRIPCION", instrumento.getDescripcion(), titleFont, font);

        document.close();

        return baos.toByteArray();
    }

    private void addInstrumentInfo(Document document, String title, String content, PdfFont titleFont, PdfFont contentFont) {
        Paragraph paragraph = new Paragraph();
        Text titleText = new Text(title + ": ").setFont(titleFont);
        Text contentText = new Text(content).setFont(contentFont);
        paragraph.add(titleText);
        paragraph.add(contentText);
        document.add(paragraph);
    }
}
