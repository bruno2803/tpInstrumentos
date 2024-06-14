package TpInstrumentosBack.tpInstrumentosBack.Services;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Usuario;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.BaseRepository;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl extends BaseServiceImpl<Usuario, Long> implements UsuarioService{

    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioServiceImpl(BaseRepository<Usuario, Long> baseRepository, UsuarioRepository usuarioRepository) {
        super(baseRepository);
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public List<Usuario> findAll() throws Exception {
        try {
            List<Usuario> entities = baseRepository.findAll();
            return entities;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
