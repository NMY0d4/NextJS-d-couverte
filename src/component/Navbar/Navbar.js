import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div>
            <Link href={`/`}>Accueil</Link>
            <Link href={`/blog/article`}>&nbsp;&nbsp;Article</Link>
            <Link href={`/contact`}>&nbsp;&nbsp;Contact</Link>
        </div>
    );
}
