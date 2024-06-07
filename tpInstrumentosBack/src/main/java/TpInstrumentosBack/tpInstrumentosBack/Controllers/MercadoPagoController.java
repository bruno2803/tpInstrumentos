package TpInstrumentosBack.tpInstrumentosBack.Controllers;

import TpInstrumentosBack.tpInstrumentosBack.Entities.Pedido;
import TpInstrumentosBack.tpInstrumentosBack.Entities.PreferenceMp;
import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.preference.PreferenceBackUrlsRequest;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.resources.preference.Preference;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class MercadoPagoController {

    public PreferenceMp getPreferenciaIdMercadoPago(Pedido pedido){
        try {
            MercadoPagoConfig.setAccessToken("TEST-4579365248936936-060620-1be3b392ba99f758e5416c2095b61fcf-731673605");
            PreferenceItemRequest itemRequest = PreferenceItemRequest.builder()
                    .id(Long.toString(pedido.getId()))
                    .title("Pedido")
                    .description("Pedido realizado desde el carrito de compras")
                    .pictureUrl("https://img-global.cpcdn.com/recipes/0709fbb52d87d2d7/1200x630cq70/photo.jpg")
                    .quantity(1)
                    .currencyId("ARG")
                    .unitPrice(new BigDecimal(pedido.getTotalPedido()))
                    .build();
            List<PreferenceItemRequest> items = new ArrayList<>();
            items.add(itemRequest);

            PreferenceBackUrlsRequest backURL = PreferenceBackUrlsRequest.builder().success("http://localhost:9000/")
                    .pending("http://localhost:9000/").failure("http://localhost:9000").build();

            PreferenceRequest preferenceRequest = PreferenceRequest.builder()
                    .items(items)
                    .backUrls(backURL)
                    .build();
            PreferenceClient client = new PreferenceClient();
            Preference preference = client.create(preferenceRequest);

            PreferenceMp mpPreference = new PreferenceMp();
            mpPreference.setStatusCode(preference.getResponse().getStatusCode());
            mpPreference.setId(preference.getId());
            return mpPreference;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }
}
