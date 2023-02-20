import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const id = "article";
    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>training NextJS</title>
            </Head>
            <h1>Hello Next JS</h1>
            <a href="https://google.com" target="_blank">
                google
            </a>
        </>
    );
}
