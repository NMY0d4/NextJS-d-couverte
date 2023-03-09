import React from "react";

export default function Cours({ results }) {
  console.log(results);
  return (
    <div>
      <h1>Le BTC est à : </h1>
      <p>results</p>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const results = await data.json();

  return {
    props: {
      results,
    },
  };
}
