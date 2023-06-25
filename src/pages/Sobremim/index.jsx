import PostModelo from "@/components/PostModelo";
import fotoCapa from "@/assets/sobre_mim_capa.png"
import styles from "./Sobremim.module.css"
import fotoSobremim from "@/assets/foto_sobre_mim.png"


export default function Sobremim() {

  return (
    <main>
        <PostModelo fotoCapa={fotoCapa}  titulo="Sobre mim"> 
        <h3 className={styles.subtitulo}>
            Olá eu sou o Márcio Brener
        </h3>
        <img 
          src={fotoSobremim} alt="" 
          className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed est libero porro quibusdam dignissimos similique eos enim facilis qui, vero itaque ducimus dolorum nihil vel mollitia! Officia est iste repudiandae?
        </p>
        <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis obcaecati placeat porro natus unde dolore saepe quod, quidem, libero vero voluptas officia repudiandae blanditiis odit laboriosam eius officiis cupiditate inventore!</p>
        <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur neque odio recusandae libero nam quod sit exercitationem. Consequatur natus quibusdam minima repellendus veritatis qui rerum tempore labore praesentium perferendis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eos nesciunt modi, ut doloribus iure voluptas eligendi corrupti? Veniam quod similique tempora consequatur exercitationem, animi quas. Facere debitis quo alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, eius maxime porro accusantium ducimus dignissimos tempora, quia itaque laborum illum earum unde fugiat! Laudantium fugit facilis officiis, accusamus asperiores ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita molestiae veritatis fugit voluptates, eaque quas, blanditiis quo tempore, repudiandae ad architecto. Assumenda saepe ratione quam voluptate impedit ipsum quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione dolor corporis, molestiae recusandae ex pariatur numquam maxime deleniti fuga temporibus veritatis qui natus voluptatibus. Delectus quaerat sapiente deserunt quas!</p>
        <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quos illum eius dolore aut? Perspiciatis esse est suscipit, amet ad totam fuga nihil delectus incidunt consequatur nostrum possimus dignissimos? Fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque, aliquid ratione recusandae voluptatum atque laboriosam, quo suscipit provident, repellat saepe sapiente doloribus deleniti cupiditate laborum eius quidem enim neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit maxime, fuga vitae, quos, id non eius enim culpa quia omnis molestiae recusandae laborum iste. Neque omnis suscipit ipsam nam.</p>
        </PostModelo>
    </main>
  )
}
