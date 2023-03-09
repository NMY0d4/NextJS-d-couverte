import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../../styles/Home.module.scss';

import request from '../../utils/request/data.request';

export default function Liste({ listeActive }) {
  const { name, data } = listeActive;

  return (
    <div className='container'>
      <h1 className={styles.titre}>{name}</h1>
      <table className={styles.tableau}>
        <tbody>
          {data.map((el, i) => (
            <tr key={uuidv4()}>
              <td>{el.en}</td>
              <td>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps(context) {
  const liste = context.params.liste;

  const data = await request('listes');
  const listeActive = data.englishList.find((el) => el.name === liste);

  return {
    props: {
      listeActive,
    },
  };
}

export async function getStaticPaths() {
  const data = await request('listes');
  const paths = data.englishList.map((el) => ({
    params: { liste: el.name },
  }));

  return {
    paths,
    fallback: false,
  };
}
