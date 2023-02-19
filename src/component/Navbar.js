import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div>
            <Link href={`/accueil`}>Accueil</Link>
            <Link href={`/blog/article`}>Article</Link>
            <Link href={`/contact`}>Contact</Link>
        </div>
    );
}
