// Login.tsx
import { Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { getByUsernameAndPassword } from "../../services/UsuarioApi";

export const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await getByUsernameAndPassword(username, password);
      if (user) {
        login(user.id, user.username, user.rol);
        navigate("/");
        //console.log(user);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(
        "Ocurrió un error al intentar iniciar sesión. Por favor, intenta de nuevo."
      );
    }
  };

  const handleGuestContinue = () => {
    login(0, "invitado", "INVITADO");
    navigate("/");
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}>
        <span
          style={{ fontSize: "10vh" }}
          className="material-symbols-outlined"
        >
          person
        </span>
        <Form onSubmit={handleSubmitForm} className={styles.form}>
          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.label}>Usuario</Form.Label>
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              value={username}
              type="text"
              placeholder="Usuario"
              required
              className={styles.input}
            />
          </Form.Group>
          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.label}>Contraseña</Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPass ? "text" : "password"}
              placeholder="Contraseña"
              required
              className={styles.input}
            />
          </Form.Group>
          <div className={styles.switchContainer}>
            <Form.Check
              type="switch"
              onChange={() => setShowPass(!showPass)}
              id="show-password"
              label="Mostrar contraseña"
              className={styles.switch}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button type="submit" className={styles.button} style={{backgroundColor:'#3483fa'}}>
              Iniciar Sesión
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
