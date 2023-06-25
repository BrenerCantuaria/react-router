import posts from "@/json/posts.json"
import styles from "./Inicio.Module.css"
import PostCard from "@/components/PostCard";

export default function Inicio() {
  
  return (
      <ul className={styles.posts} >
        {posts.map((item)=>(
          <li key={item.id}>
            <PostCard post={item}/>
          </li>
        ))}
      </ul>

  )
}
