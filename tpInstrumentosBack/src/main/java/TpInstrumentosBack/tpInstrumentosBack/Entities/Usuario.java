package TpInstrumentosBack.tpInstrumentosBack.Entities;


import TpInstrumentosBack.tpInstrumentosBack.Entities.Enums.Roles;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "usuario")
public class Usuario extends Base{

    private String usuario;
    private String clave;
    private Roles rol;

}
