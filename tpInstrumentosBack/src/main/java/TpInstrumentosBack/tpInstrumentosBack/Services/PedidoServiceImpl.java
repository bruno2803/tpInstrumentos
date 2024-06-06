package TpInstrumentosBack.tpInstrumentosBack.Services;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Pedido;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.BaseRepository;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoServiceImpl extends BaseServiceImpl<Pedido, Long> implements PedidoService{

    @Autowired
    private PedidoRepository pedidoRepository;

    public PedidoServiceImpl(BaseRepository<Pedido, Long> baseRepository, PedidoRepository pedidoRepository) {
        super(baseRepository);
        this.pedidoRepository = pedidoRepository;
    }

    @Override
    public List<Pedido> findAll() throws Exception {
        try {
            List<Pedido> entities = baseRepository.findAll();
            return entities;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
