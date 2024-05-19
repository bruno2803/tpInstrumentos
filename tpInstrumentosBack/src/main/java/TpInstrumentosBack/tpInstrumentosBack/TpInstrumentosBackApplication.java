package TpInstrumentosBack.tpInstrumentosBack;

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

	public static void main(String[] args) {

		SpringApplication.run(TpInstrumentosBackApplication.class, args);
		System.out.println("----------Estoy Funcionando----------");
	}

	@Bean
	CommandLineRunner init(InstrumentoRepository instrumentoRepository) {
		return args -> {
			System.out.println("-----------------ESTOY FUNCIONANDO---------");

		};
	}

}
