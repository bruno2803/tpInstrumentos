
type PedidoParams = {
  id: number;
  titulo: string;
  fecha: Date;
  totalPedido: number;
};

export const ItemPedido = (args: PedidoParams) => {
  return (
    <div className="card mb-3" style={{ width: "800px", marginTop: "10px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://media.istockphoto.com/id/1363734940/es/foto/tres-cajas-de-cart%C3%B3n.jpg?s=612x612&w=0&k=20&c=F3Dby9iUDKLxW3QgrVCwFVm5RGl1F0HSHSk_8MDUi1o="
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{margin:'10px'}}>
            <h5 className="card-title">Codigo pedido : {args.id}</h5>
            <h5 className="card-text">Total : ${args.totalPedido}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

