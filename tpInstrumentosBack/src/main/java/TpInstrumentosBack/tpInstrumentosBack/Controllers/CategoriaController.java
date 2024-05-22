package TpInstrumentosBack.tpInstrumentosBack.Controllers;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Categoria;
import TpInstrumentosBack.tpInstrumentosBack.Services.BaseServiceImpl;
import TpInstrumentosBack.tpInstrumentosBack.Services.CategoriaServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/categorias")
public class CategoriaController extends BaseControllerImpl<Categoria, CategoriaServiceImpl> {
}
