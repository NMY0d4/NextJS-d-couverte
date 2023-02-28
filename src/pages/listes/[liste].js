import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Home.module.scss";

import request from "../../utils/request/data.request";

export default function liste({ listeActive }) {
  const { name, data } = listeActive;

  return (
    <div className="container">
      <h1 className={styles.titre}>{name}</h1>
      <table className={styles.tableau}>
        <tbody>
          {data.map((el) => (
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

  const data = await request("listes");
  const listeActive = data.englishList.find((el) => el.name === liste);

  return {
    props: {
      listeActive,
    },
  };
}

export async function getStaticPaths() {
  const data = await request("listes");

  return {
    paths: [{ params: { liste: "words" } }],
    fallback: false,
  };
}