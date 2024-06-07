import Instrumento from "../entities/Instrumento";
import PreferenceMp from "../entities/MercadoPago/PreferenceMp";
import Pedido from "../entities/Pedido";
import PedidoDetalle from "../entities/PedidoDetalle";


export function getAllInstrumentos(){
    return fetch(`http://localhost:9000/api/instrumentos`)
            .then(res=>res.json())
            .then(json=>json)
}

export function getOneInstrumento(id:number){
    return fetch(`http://localhost:9000/api/instrumentos/${id}`)
            .then(res=>res.json())
            .then(json=>json)
}

export function getAllCategorias(){
    return fetch(`http://localhost:9000/api/categorias`)
            .then(res=>res.json())
            .then(json=>json)
}

export function deleteInstrumento(id:number) {
    return fetch(`http://localhost:9000/api/instrumentos/${id}`, {
        method: 'DELETE'
    })
}

export function updateInstrumento(id: number, instrumento: any) {
    return fetch(`http://localhost:9000/api/instrumentos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(instrumento)
    })
}

export async function saveInstrumento(data: Instrumento): Promise<Instrumento> {
    const response = await fetch( "http://localhost:9000/api/instrumentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as Instrumento;
}

export async function savePedidoDetalle(data: PedidoDetalle): Promise<PedidoDetalle> {
    const response = await fetch( "http://localhost:9000/api/pedidoDetalle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as PedidoDetalle;
}

export async function savePedido(data: Pedido): Promise<Pedido> {
    const response = await fetch( "http://localhost:9000/api/pedidos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as Pedido;
}

export function getAllPedidos(){
    return fetch(`http://localhost:9000/api/pedidos`)
            .then(res=>res.json())
            .then(json=>json)
}

export async function createPreferenceMP(pedido?:Pedido){
    let urlServer = "http://localhost:9000/api/pedidos/create_preference_mp";
	let method:string = "POST";
    const response = await fetch(urlServer, {
	  "method": method,
	  "body": JSON.stringify(pedido),
	  "headers": {
		"Content-Type": 'application/json'
	  }
	});
    return await response.json() as PreferenceMp;   
}

/*export function getInstrumentosJSON() {

	let datos: Instrumento[] = [
		{
			"id":1,
			"instrumento": "Mandolina Instrumento Musical Stagg Sunburst",
			"marca": "Stagg",
			"modelo": "M20",
			"imagenPath": "https://musiclave.com/wp-content/uploads/2019/02/Mandolina-napolitana.jpg",
			"precio": 2450,
			"costoEnvio": "G",
			"cantidadVendida": "28",
			"descripcion": "Estas viendo una excelente mandolina de la marca Stagg, con un sonido muy dulce, tapa aros y fondo de tilo, y diapasón de palisandro. Es un instrumento acústico (no se enchufa) de cuerdas dobles (4 pares) con la caja ovalada y cóncava, y el mástil corto. Su utilización abarca variados ámbitos, desde rock, folk, country y ensambles experimentales.",
			"initialEnvio": "false"
		},
		{
			"id":2,
			"instrumento": "Pandereta Pandero Instrumento Musical ",
			"marca": "DyM ventas",
			"modelo": "32 sonajas",
			"imagenPath": "https://http2.mlstatic.com/D_NQ_NP_943866-MLA44548754405_012021-O.webp",
			"precio": 325,
			"costoEnvio": "150",
			"cantidadVendida": "10",
			"descripcion": "1 Pandereta - 32 sonajas metálicas. Más de 8 años vendiendo con 100 % de calificaciones POSITIVAS y clientes satisfechos !! ",
			"initialEnvio": "true"
		},
		{
			"id":3,
			"instrumento": "Triangulo Musical 24 Cm Percusion",
			"marca": "LBP",
			"modelo": "24",
			"imagenPath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsj0RK5lCpGQ8zyPMKbfXyXyxhhR057S2ne5KDDykULg&s",
			"precio": 260,
			"costoEnvio": "250",
			"cantidadVendida": "3",
			"descripcion": "Triangulo Musical de 24 Centímetros De Acero. ENVIOS POR CORREO O ENCOMIENDA: Se le deberán adicionar $40 en concepto de Despacho y el Costo del envío se abonará al recibir el producto en Terminal, Sucursal OCA o Domicilio",
			"initialEnvio": "true"
		},
		{
			"id":4,
			"instrumento": "Bar Chimes Lp Cortina Musical 72 Barras ",
			"marca": "FM",
			"modelo": "LATIN",
			"imagenPath": "https://http2.mlstatic.com/D_NQ_NP_853533-MLA31040848888_062019-O.webp",
			"precio": 2250,
			"costoEnvio": "G",
			"cantidadVendida": "2",
			"descripcion": "BARCHIME CORTINA MUSICAL DE 25 BARRAS LATIN CUSTOM. Emitimos factura A y B",
			"initialEnvio": "false"
		},
		{
			"id":5,
			"instrumento": "Shekeres. Instrumento. Música. Artesanía. ",
			"marca": "Azalea Artesanías",
			"modelo": "Cuentas de madera",
			"imagenPath": "https://www.percuforum.com/blog/wp-content/uploads/2021/09/Xequere-4.jpg",
			"precio": 850,
			"costoEnvio": "300",
			"cantidadVendida": "5",
			"descripcion": "Las calabazas utilizadas para nuestras artesanías son sembradas y cosechadas por nosotros, quienes seleccionamos el mejor fruto para garantizar la calidad del producto y ofrecerle algo creativo y original.",
			"initialEnvio": "true"
		},
		{
			"id":6,
			"instrumento": "Antiguo Piano Aleman Con Candelabros. ",
			"marca": "Neumeyer",
			"modelo": "Stratus",
			"imagenPath": "https://http2.mlstatic.com/D_NQ_NP_741625-MLA25468412771_032017-O.webp",
			"precio": 17000,
			"costoEnvio": "2000",
			"cantidadVendida": "0",
			"descripcion": "Buen dia! Sale a la venta este Piano Alemán Neumeyer con candelabros incluidos. Tiene una talla muy bonita en la madera. Una pieza de calidad.",
			"initialEnvio": "true"
		},
		{
			"id":7,
			"instrumento": "Guitarra Ukelele Infantil Grande 60cm",
			"marca": "GUITARRA",
			"modelo": "UKELELE",
			"imagenPath": "https://http2.mlstatic.com/D_NQ_NP_602949-MLA32297056646_092019-O.webp",
			"precio": 500,
			"costoEnvio": "G",
			"cantidadVendida": "5",
			"descripcion": "Material: Plástico smil madera 4 Cuerdas longitud: 60cm, el mejor regalo para usted, su familia y amigos, adecuado para 3-18 años de edad",
			"initialEnvio": "false"
		},
		{
			"id":8,
			"instrumento": "Teclado Organo Electronico Musical Instrumento 54 Teclas ",
			"marca": "GADNIC",
			"modelo": "T01",
			"imagenPath": "https://http2.mlstatic.com/D_NQ_NP_696216-MLA72642759439_112023-O.webp",
			"precio": 2250,
			"costoEnvio": "G",
			"cantidadVendida": "1375",
			"descripcion": "Organo Electrónico GADNIC T01. Display de Led. 54 Teclas. 100 Timbres / 100 Ritmos. 4 1/2 octavas. 8 Percusiones. 8 Canciones de muestra. Grabación y reproducción. Entrada para Micrófono. Salida de Audio (Auriculares / Amplificador). Vibrato. Sustain Incluye Atril Apoya partitura y Micrófono. Dimensiones: 84,5 x 32,5 x 11 cm",
			"initialEnvio": "false"
		},
		{
			"id":9,
			"instrumento": "Instrumentos De Percusión Niños Set Musical Con Estuche ",
			"marca": "KNIGHT",
			"modelo": "LB17",
			"imagenPath": "https://http2.mlstatic.com/D_NQ_NP_911978-MLA40534297222_012020-O.webp",
			"precio": 2700,
			"costoEnvio": "300",
			"cantidadVendida": "15",
			"descripcion": "Estas viendo un excelente y completísimo set de percusion para niños con estuche rígido, equipado con los instrumentos mas divertidos! De gran calidad y sonoridad. Ideal para jardines, escuelas primarias, musicoterapeutas o chicos que se quieran iniciar en la música de la mejor manera. Es un muy buen producto que garantiza entretenimiento en cualquier casa o reunión, ya que esta equipado para que varias personas al mismo tiempo estén tocando un instrumento.",
			"initialEnvio": "true"
		},
		{
			"id":10,
			"instrumento": "Batería Musical Infantil Juguete Niño 9 Piezas Palillos ",
			"marca": "Bateria",
			"modelo": "Infantil",
			"imagenPath": "https://http2.mlstatic.com/D_NQ_NP_989428-MLU71352892874_082023-O.webp",
			"precio": 850,
			"costoEnvio": "250",
			"cantidadVendida": "380",
			"descripcion": "DESCRIPCIÓN: DE 1 A 3 AÑOS. EL SET INCLUYE 5 TAMBORES, PALILLOS Y EL PLATILLO TAL CUAL LAS FOTOS. SONIDOS REALISTAS Y FÁCIL DE MONTAR. MEDIDAS: 40X20X46 CM",
			"initialEnvio": "true"
		}
	];

	return datos

}*/