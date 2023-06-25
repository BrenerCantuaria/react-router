/* eslint-disable react/prop-types */
import styles from "./ButtonEstilo.module.css";

export default function Button({ children,tam }) {
  return <button className={`${styles.botaoEstilo} ${styles[tam]}`}>{children}</button>;
}
