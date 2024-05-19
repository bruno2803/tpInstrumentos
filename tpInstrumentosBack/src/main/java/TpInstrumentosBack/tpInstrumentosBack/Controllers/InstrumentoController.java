package TpInstrumentosBack.tpInstrumentosBack.Controllers;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Instrumento;
import TpInstrumentosBack.tpInstrumentosBack.Services.InstrumentoServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/instrumentos")
public class InstrumentoController extends BaseControllerImpl<Instrumento, InstrumentoServiceImpl>{
}
