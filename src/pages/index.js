import { Inter } from "@next/font/google";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

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
                            <tr key={i}>
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
    const data = await import(`../data/vocabulary.json`);
    const array = data.vocabulary;
    return {
        props: {
            array,
        },
    };
}
