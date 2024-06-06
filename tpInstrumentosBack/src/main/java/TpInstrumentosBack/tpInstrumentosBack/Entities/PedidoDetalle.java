package TpInstrumentosBack.tpInstrumentosBack.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "pedidoDetalle")
public class PedidoDetalle extends Base{

    private int cantidad;

    @ManyToOne(optional = false)
    @JoinColumn(name = "IdInstrumento")
    private Instrumento instrumento;
}
