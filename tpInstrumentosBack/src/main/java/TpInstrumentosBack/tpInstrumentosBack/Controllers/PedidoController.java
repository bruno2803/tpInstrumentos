package TpInstrumentosBack.tpInstrumentosBack.Controllers;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Pedido;
import TpInstrumentosBack.tpInstrumentosBack.Entities.PreferenceMp;
import TpInstrumentosBack.tpInstrumentosBack.Services.PedidoServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/api/pedidos")
public class PedidoController extends BaseControllerImpl<Pedido, PedidoServiceImpl>{

    @PostMapping("create_preference_mp")
    public PreferenceMp crearPreferenciaMercadoPago(@RequestBody Pedido pedido){
        MercadoPagoController cMercadoPago = new MercadoPagoController();
        PreferenceMp preference = cMercadoPago.getPreferenciaIdMercadoPago(pedido);
        return preference;
    }

}
