package TpInstrumentosBack.tpInstrumentosBack;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Categoria;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.CategoriaRepository;
import TpInstrumentosBack.tpInstrumentosBack.Repositories.InstrumentoRepository;
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
	CommandLineRunner init(InstrumentoRepository instrumentoRepository, CategoriaRepository categoriaRepository) {
		return args -> {
			System.out.println("-----------------ESTOY FUNCIONANDO---------");

			Categoria categoria1 = Categoria.builder()
					.denominacion("Cuerda")
					.build();

			Categoria categoria2 = Categoria.builder()
					.denominacion("Viento")
					.build();
			Categoria categoria3 = Categoria.builder()
					.denominacion("Percusion")
					.build();

			Categoria categoria4 = Categoria.builder()
					.denominacion("Teclado")
					.build();

			Categoria categoria5 = Categoria.builder()
					.denominacion("Electronico")
					.build();
			categoriaRepository.save(categoria1);
			categoriaRepository.save(categoria2);
			categoriaRepository.save(categoria3);
			categoriaRepository.save(categoria4);
			categoriaRepository.save(categoria5);
		};
	}

}
