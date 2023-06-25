/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({children,to}) {
  const locale = useLocation();

  console.log(locale);

  return (
    <Link
      className={`${styles.link} ${
        locale.pathname === to ? styles.linkDestacado : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
