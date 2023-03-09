import { Inter } from '@next/font/google';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import request from '../utils/request/data.request';

import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

// import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });

export default function Home({ array }) {
  const [state, setState] = useState(false);
  useEffect(() => {
    newWord();
  }, []);

  const newWord = () => {
    fetch('/api/vocapi')
      .then((response) => response.json())
      .then((data) => setState(data));
  };
  console.log(state);
  let randomWord;
  if (state) {
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
    console.log(randomWord);
  }

  return (
    <>
      <Head>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Titre</title>
      </Head>
      <div className='container'>
        <h1 className={styles.titre}>Mot au hasard</h1>

        {/* <table className={styles.tableau}>
                    <tbody>
                        {array.map((el, i) => (
                            <tr key={uuidv4()}>
                                <td>{el.en}</td>
                                <td>{el.fr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
        <button onClick={newWord} className='btn btn-primary d-block m-auto'>
          Get Random words
        </button>
        <h2 className='text-center'>{randomWord}</h2>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await request('vocabulary');
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
