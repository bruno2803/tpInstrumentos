import { Button, Form } from "react-bootstrap";
import "../../../styles/styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Usuario from "../../../entities/Usuario";
import { getAllUsuarios } from "../../../services/FuncionesApi";
import { Roles } from "../../../entities/Roles";


export const Login = () => {

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario>(new Usuario());
  const [isChecked, setIsChecked] = useState(false);
  const [txtValidacion, setTxtValidacion] = useState<string>("");
  const [showPass, setShowPass] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [Usuarios, setUsuarios] = useState<Usuario[]>([]);

  const getUsuarios = async () => {
    const datos: Usuario[] = await getAllUsuarios();
    setUsuarios(datos);
  };
  useEffect(() => {
    getUsuarios();
  }, []);

  const login = async () => {
    if (usuario?.usuario == undefined || usuario?.usuario === "") {
      setTxtValidacion("Ingrese el nombre de usuario");
      return;
    }
    if (usuario?.clave == undefined || usuario?.clave === "") {
      setTxtValidacion("Ingrese la clave");
      return;
    }

    {
      Usuarios.map((usu: Usuario) => {
        if (usuario?.usuario == usu.usuario && usuario?.clave == usu.clave) {
          if (usuario?.usuario == "Admin") {
            usuario.rol = Roles.ADMIN;
          } else usuario.rol = Roles.USER;
          setUsuario(usuario);
          localStorage.setItem("usuario", JSON.stringify(usuario));
          navigate("/App", {
            replace: true,
            state: {
              logged: true,
              usuario: usuario,
            },
          });
        }
      });
    }
  };
    
  return (
    <div className="containerLogin">
      <div className="containerForm">

        <span style={{ fontSize: "10vh" }} className="material-symbols-outlined">group</span>

        <Form >
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control 
              name="user" 
              type="text" 
              placeholder="Usuario" 
              defaultValue={usuario?.usuario}
              onChange={(e) => (usuario.usuario = String(e.target.value))}
              onKeyDown={(e) => {
              if (e.key === "Enter") login();
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Contraseña"
              defaultValue={usuario?.clave}
              onChange={(e) => (usuario.clave = String(e.target.value))}
              onKeyDown={(e) => {
              if (e.key === "Enter") login();
              }}

            />
          </Form.Group>
          <Form.Check
            type="switch"
            onChange={() => {
                setShowPass(!showPass);
              }}
            id="custom-switch"
            label="Mostrar contraseña"
          />
          <div className="d-flex justify-content-center aling-items-center mt-4">
            <Button type="submit" variant="primary" onClick={login}>Ingresar</Button>
          </div>
          <div>
          <p style={{ color: "red" }}>{txtValidacion}</p>
          </div>
        </Form>
      </div>
    </div>
  )
}
