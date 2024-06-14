package TpInstrumentosBack.tpInstrumentosBack;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Categoria;
import TpInstrumentosBack.tpInstrumentosBack.Entities.Enums.Roles;
import TpInstrumentosBack.tpInstrumentosBack.Entities.Usuario;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TpInstrumentosBackApplication {

	@Autowired
	InstrumentoRepository instrumentoRepository;

	@Autowired
	CategoriaRepository categoriaRepository;

	public static void main(String[] args) {

		SpringApplication.run(TpInstrumentosBackApplication.class, args);
		System.out.println("----------Estoy Funcionando----------");
	}

	@Bean
	CommandLineRunner init(InstrumentoRepository instrumentoRepository, CategoriaRepository categoriaRepository,
						   PedidoDetalleRepository pedidoDetalleRepository,
						   PedidoRepository pedidoRepository, UsuarioRepository usuarioRepository) {
		return args -> {
			System.out.println("-----------------ESTOY FUNCIONANDO---------");

			Usuario usuario1 = Usuario.builder()
					.usuario("Admin")
					.clave("1234")
					.rol(Roles.ADMIN)
					.build();
			usuarioRepository.save(usuario1);

			Usuario usuario2 = Usuario.builder()
					.usuario("Client")
					.rol(Roles.USER)
					.clave("5678")
					.build();
			usuarioRepository.save(usuario2);
		};
	}

}
