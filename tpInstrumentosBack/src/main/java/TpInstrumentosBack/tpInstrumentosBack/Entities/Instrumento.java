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
@Table(name = "instrumento")
public class Instrumento extends Base{

    private String instrumento;
    private String marca;
    private String modelo;
    private String imagen;
    private double precio;
    private double costo;
    private String costoEnvio;
    private String cantidadVendida;
    private String descripcion;

    @ManyToOne(optional = false)
    @JoinColumn(name = "idCategoria")
    private Categoria categoria;

    public String getPrecioString() {
        return String.valueOf(precio);
    }

    public String getcostoString() {
        return String.valueOf(costo);
    }
    public String getCategoriaString() {
        return categoria.getDenominacion();
    }
}
