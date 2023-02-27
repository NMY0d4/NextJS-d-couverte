import Link from "next/link";
import React from "react";

function index({ listes }) {
  return (
    <div>
      <h1>Les listes de vocabulaire</h1>
      {/* <Link href={`/blog/10 plats Lorrains`}>10 plats Lorrains</Link> */}
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const data = await import(`../../data/listes.json`);
  const listes = data.englishList;

  if (listes.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      listes,
    },
  };
}
