package TpInstrumentosBack.tpInstrumentosBack.Controllers;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Pedido;
import TpInstrumentosBack.tpInstrumentosBack.Services.PedidoServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/api/pedidos")
public class PedidoController extends BaseControllerImpl<Pedido, PedidoServiceImpl>{

}
