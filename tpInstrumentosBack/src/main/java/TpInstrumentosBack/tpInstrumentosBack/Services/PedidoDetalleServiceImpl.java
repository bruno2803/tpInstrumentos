package TpInstrumentosBack.tpInstrumentosBack.Services;

import TpInstrumentosBack.tpInstrumentosBack.Entities.PedidoDetalle;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.BaseRepository;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.PedidoDetalleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoDetalleServiceImpl extends BaseServiceImpl<PedidoDetalle, Long> implements PedidoDetalleService{

    @Autowired
    private PedidoDetalleRepository pedidoDetalleRepository;

    public PedidoDetalleServiceImpl(BaseRepository<PedidoDetalle, Long> baseRepository, PedidoDetalleRepository pedidoDetalleRepository) {
        super(baseRepository);
        this.pedidoDetalleRepository = pedidoDetalleRepository;
    }

    @Override
    public List<PedidoDetalle> findAll() throws Exception {
        try {
            List<PedidoDetalle> entities = baseRepository.findAll();
            return entities;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
