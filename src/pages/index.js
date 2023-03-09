import { Inter } from "@next/font/google";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import request from "../utils/request/data.request";

import { v4 as uuidv4 } from "uuid";

// import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ array }) {
    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Titre</title>
            </Head>
            <div className="container">
                <h1 className={styles.titre}>Vocabulaire de base</h1>
                <table className={styles.tableau}>
                    <tbody>
                        {array.map((el, i) => (
                            <tr key={uuidv4()}>
                                <td>{el.en}</td>
                                <td>{el.fr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const data = await request("vocabulary");
    const array = data.vocabulary;

    if (array.length === 0) {
        return { notFound: true };
    }

    return {
        props: {
            array,
        },
    };
}
