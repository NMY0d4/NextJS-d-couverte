import Link from "next/link";
import React from "react";

function index() {
    return (
        <div>
            <h1>Mon blog</h1>
            <Link href={`/blog/10 plats Lorrains`}>10 plats Lorrains</Link>
        </div>
    );
}

export default index;
