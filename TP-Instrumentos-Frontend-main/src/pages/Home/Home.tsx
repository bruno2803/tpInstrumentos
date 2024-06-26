import styles from "./Home.module.css";
import { useCarrito } from "../../hooks/useCarrito";
import { Carrousel } from "../../components/ui/Carrousel/Carrousel";

export const Home = () => {
  useCarrito();
  return (
    <>
    <div className={styles.homeContainer}>
      <h1>MUSIC STORE</h1>
    </div>
    <div className= {styles.carrouselContainer}>
    <Carrousel />
    </div>
    </>
  );
};
