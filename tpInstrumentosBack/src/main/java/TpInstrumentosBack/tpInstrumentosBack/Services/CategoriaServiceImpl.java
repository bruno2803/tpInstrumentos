package TpInstrumentosBack.tpInstrumentosBack.Services;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Categoria;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.BaseRepository;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaServiceImpl extends BaseServiceImpl<Categoria, Long>{

    @Autowired
    private CategoriaRepository categoriaRepository;

    public CategoriaServiceImpl(BaseRepository<Categoria, Long> baseRepository, CategoriaRepository categoriaRepository) {
        super(baseRepository);
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    public List<Categoria> findAll() throws Exception {
        try {
            List<Categoria> entities = baseRepository.findAll();
            return entities;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
