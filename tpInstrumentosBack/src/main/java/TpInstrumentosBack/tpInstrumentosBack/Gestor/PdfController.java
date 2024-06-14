package TpInstrumentosBack.tpInstrumentosBack.Gestor;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Instrumento;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.InstrumentoRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/pdf")
public class PdfController {

    @Autowired
    private PdfService pdfService;

    @Autowired
    private InstrumentoRepository instrumentoRepository;

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> generatePdf(@PathVariable Long id) throws IOException {
        Instrumento instrumento = instrumentoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Entidad no encontrada"));

        byte[] pdf = pdfService.generatePdf(instrumento);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("filename", "DetalleInstrumento.pdf");

        return ResponseEntity
                .ok()
                .headers(headers)
                .body(pdf);
    }
}
