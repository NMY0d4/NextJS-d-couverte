import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} href={`/`}>
        Accueil
      </Link>
      <Link className={styles.link} href={`/listes`}>
        Listes
      </Link>
      <Link className={styles.link} href={`/citation`}>
        Citation
      </Link>
      <Link className={styles.link} href={`/add`}>
        Add (POST)
      </Link>
    </nav>
  );
}
