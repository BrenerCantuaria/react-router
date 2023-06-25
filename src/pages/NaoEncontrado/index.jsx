import styles from "./NaoEncontrado.module.css";
import erro404 from "@/assets/erro_404.png"
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
export default function NaoEncontrado() {
  const navg = useNavigate()

  return (
    <>
    <div className={styles.conteudoContainer}>
      <span className={styles.texto404}>404</span>
      <h1 className={styles.titulo}>OPS!, página não encontrada</h1>
      <p className={styles.paragrafo}>
        Tem certeza de que era isso que você estava procurando? <br /> Aguarde
        uns instantes e recarregue a página, ou volte para a página inicial.
      </p>

      <div onClick={()=>{navg("/")}} className={styles.botaoContainer}> 


        <Button tam="lg">Voltar</Button>


        <img className={styles.imagemCachorro} src={erro404} alt="error 404" />
      </div>
    </div>
    <div className={styles.espacoEmBranco}>
        
    </div>
    </>
      );
}
