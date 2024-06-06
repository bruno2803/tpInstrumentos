import { Button, Form } from "react-bootstrap";
import { Header } from "../../ui/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Instrumento from "../../../entities/Instrumento";
import Categorias from "../../../entities/Categoria";
import {
  getAllCategorias,
  getOneInstrumento,
  saveInstrumento,
} from "../../../services/FuncionesApi";

export const FormularioInstrumento = () => {
  const { id } = useParams();
  const [instru, setInstrumento] = useState<Instrumento>(new Instrumento());
  const [categorias, setCategorias] = useState<Categorias[]>([]);
  const [txtValidacion, setTxtValidacion] = useState<string>("");
  let TipoCat: String = "";
  const navigate = useNavigate();

  const getCategorias = async () => {
    const datos: Categorias[] = await getAllCategorias();
    setCategorias(datos);
  };

  const getInstrumento = async () => {
    if (Number(id) !== 0) {
      let instrumentoSelect: Instrumento = await getOneInstrumento(Number(id));
      setInstrumento(instrumentoSelect);
    } else {
      let instrumentoSelect: Instrumento = new Instrumento();
      setInstrumento(instrumentoSelect);
    }
  };

  const save = async () => {
    if (instru.instrumento == undefined || instru.instrumento === "") {
      setTxtValidacion("Ingrese el nombre del instrumento");
      return;
    }
    if (instru.marca == undefined || instru.marca === "") {
      setTxtValidacion("Ingrese la marca del instrumento");
      return;
    }
    if (instru.modelo == undefined || instru.modelo === "") {
      setTxtValidacion("Ingrese el modelo del instrumento");
      return;
    }
    if (instru.imagen == undefined || instru.imagen === "") {
      setTxtValidacion("Ingrese la URL de la imagen");
      return;
    }
    if (instru.precio == undefined || instru.precio === 0) {
      setTxtValidacion("El precio debe ser distinto a cero");
      return;
    }
    if (instru.costoEnvio == undefined || instru.costoEnvio === "") {
      setTxtValidacion("Ingrese el costo de envio");
      return;
    }
    if (instru.descripcion == undefined || instru.descripcion === "") {
      setTxtValidacion("Agregue una descripcion");
      return;
    }
    saveInstrumento(instru);
    navigate("/grilla");
  };

  useEffect(() => {
    getInstrumento();
    getCategorias();
  }, []);

  return (
    <>
      <Header />
      <div className="formularioContainer">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{ id ? 'Agregar instrumento' : 'Modificar instrumento' }</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del instrumento"
              defaultValue={instru?.instrumento}
              onChange={(e) => (instru.instrumento = String(e.target.value))}
            />
          </Form.Group>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Categoría
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                TipoCat = e.target.value;

                categorias.forEach((cat: Categorias) => {
                  if (cat.denominacion === TipoCat) {
                    instru.categoria = cat;
                  }
                });

                console.log(instru.categoria.denominacion); // Log después de la iteración
              }}
            >
              {Number(id) !== 0 ? (
                <option value="">{instru?.categoria.denominacion}</option>
              ) : (
                <option value="">Seleccione una categoría</option>
              )}
              {Array.from(
                new Set(categorias.map((cate) => cate.denominacion))
              ).map((denominacion) => (
                <option key={denominacion} value={denominacion}>
                  {denominacion}
                </option>
              ))}
            </select>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Marca del instrumento"
              defaultValue={instru?.marca}
              onChange={(e) => (instru.marca = String(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Modelo del instrumento"
              defaultValue={instru?.modelo}
              onChange={(e) => (instru.modelo = String(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Url de la imagen"
              defaultValue={instru?.imagen}
              onChange={(e) => (instru.imagen = String(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              defaultValue={instru?.precio}
              onChange={(e) => (instru.precio = Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Costo de envio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el costo de envio o 'G' en caso de ser gratis"
              defaultValue={instru?.costoEnvio}
              onChange={(e) => (instru.costoEnvio = String(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descripcion del instrumento"
              defaultValue={instru?.descripcion}
              onChange={(e) => (instru.descripcion = String(e.target.value))}
            />
          </Form.Group>

          <Button
            onClick={save}
            variant="primary"
            type="submit"
            className="btnFormularioAgregar"
          >
            Agregar
          </Button>
        </Form>
      </div>
    </>
  );
};
