import styles from "./Banner.module.css";
import circuloColorido from "@/assets/circulo_colorido.png";
import minhaFoto from "@/assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Hello word</h1>
        <p>Sou o Márcio Brener</p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt="" />
        <img src={minhaFoto} className={styles.minhaFoto} alt="" />
      </div>
    </div>
  );
}
