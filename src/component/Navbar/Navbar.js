import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.link} href={`/`}>
                Accueil
            </Link>
            <Link className={styles.link} href={`/blog`}>
                Blog
            </Link>
            <Link className={styles.link} href={`/contact`}>
                Contact
            </Link>
        </nav>
    );
}
