import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const id = "article";
    return (
        <>
            <h1>Hello Next JS</h1>
            <a href="https://google.com">google</a>
            <Link href={`/blog/${id}`}>Blog</Link>
        </>
    );
}
