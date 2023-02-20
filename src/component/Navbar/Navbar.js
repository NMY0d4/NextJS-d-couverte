import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.link} href={`/`}>
                Accueil
            </Link>
            <Link className={styles.link} href={`/blog/article`}>
                &nbsp;&nbsp;Article
            </Link>
            <Link className={styles.link} href={`/contact`}>
                &nbsp;&nbsp;Contact
            </Link>
        </nav>
    );
}
