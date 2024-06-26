// CardInstrumento.tsx
import { FC } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./CardInstrumento.module.css";
import { Instrumento } from "../../../types/Instrumento";
import { CartButtons } from "../CartButtons/CartButtons";
import { useAuth } from "../../../hooks/useAuth";

interface CardInstrumentoProps {
  instrumento: Instrumento;
}

export const CardInstrumento: FC<CardInstrumentoProps> = ({ instrumento }) => {
  const { isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/producto/${instrumento.id}`);
  };

  return (
    <Card className={styles.cardInstrumento}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <Card.Img
            className={styles.instrumentImage}
            src={instrumento.imagen}
          />
        </div>
        <Card.Body className={styles.cardBody}>
          <Card.Title>{instrumento.instrumento}</Card.Title>
          <Card.Text>
            Marca: {instrumento.marca}
            <br />
            Modelo: {instrumento.modelo}
            <br />
            Precio: ${instrumento.precio}
            <br />
            {instrumento.costoEnvio === "G" ? (
              <div className={styles.envioGratis}>
                <span className={`material-symbols-outlined ${styles.icon}`}>
                  local_shipping
                </span>{" "}
                Envío gratis
              </div>
            ) : (
              <div className={styles.envioCosto}>
                <span className={`material-symbols-outlined ${styles.icon}`}>
                  local_shipping
                </span>{" "}
                Costo de envío: ${instrumento.costoEnvio}
              </div>
            )}
            <br />
            {instrumento.descripcion}
          </Card.Text>
          <div className={styles.buttonsContainer}>
            <div id="buttonVerDetalle" className={styles.detailButton}>
              <Button style={{backgroundColor:'#0d6efd'}} onClick={handleViewDetail}>
                <span className="material-symbols-outlined">info</span> Ver
                Detalle
              </Button>
            </div>
            {isAuthenticated && (role == "DEVELOPER" || role == "CLIENTE" || role == "ADMIN") && (
              <CartButtons instrumento={instrumento} />
            )}
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};
