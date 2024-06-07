import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import PreferenceMp from "../../../entities/MercadoPago/PreferenceMp";
import { createPreferenceMP } from "../../../services/FuncionesApi";

function CheckoutMp({ montoCarrito = 0 }) {
  const [idPreference, setIdPreference] = useState<string>("");

  const getPreferenceMP = async () => {
    if (montoCarrito > 0) {
      const response: PreferenceMp = await createPreferenceMP({
        id: 0,
        titulo: "Pedido Buen Sabor",
        fecha: new Date(),
        totalPedido: montoCarrito,
      });
      console.log("Preference id: " + response.id);
      if (response) setIdPreference(response.id);
    } else {
      alert("Agregue al menos un plato al carrito");
    }
  };

  //es la Public Key se utiliza generalmente en el frontend.
  initMercadoPago("TEST-9b5e80ca-af3c-4ec9-812a-a41c4f0c8551", {
    locale: "es-AR",
  });

  //redirectMode es optativo y puede ser self, blank o modal
  return (
    <div>
      <Button
        onClick={getPreferenceMP}
        className="btMercadoPago"
        style={{ marginTop:'5px' }}
      >
        Comprar
      </Button>
      <div className={idPreference ? "divVisible" : "divInvisible"}>
        <Wallet
          initialization={{ preferenceId: idPreference, redirectMode: "blank" }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      </div>
    </div>
  );
}

export default CheckoutMp;
