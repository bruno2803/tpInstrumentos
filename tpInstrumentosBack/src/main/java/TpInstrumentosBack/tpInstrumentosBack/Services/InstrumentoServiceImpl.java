package TpInstrumentosBack.tpInstrumentosBack.Services;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Instrumento;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.BaseRepository;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.InstrumentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstrumentoServiceImpl extends BaseServiceImpl<Instrumento,Long> implements InstrumentoService {
    @Autowired
    private InstrumentoRepository instrumentoRepository;

    public InstrumentoServiceImpl(BaseRepository<Instrumento, Long> baseRepository, InstrumentoRepository instrumentoRepository) {
        super(baseRepository);
        this.instrumentoRepository = instrumentoRepository;
    }

    @Override
    public List<Instrumento> findAll() throws Exception {
        try {
            List<Instrumento> entities = baseRepository.findAll();
            return entities;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

}
