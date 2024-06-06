package TpInstrumentosBack.tpInstrumentosBack.Controllers;

import TpInstrumentosBack.tpInstrumentosBack.Entities.PedidoDetalle;
import TpInstrumentosBack.tpInstrumentosBack.Services.PedidoDetalleServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/api/pedidoDetalle")
public class PedidoDetalleController extends BaseControllerImpl<PedidoDetalle, PedidoDetalleServiceImpl>{
}
