import React from "react";

export default function Contact({ data }) {
  return (
    <div>
      <h1>{data.content}</h1>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const quote = await fetch("https://api.quotable.io/random");
    const data = await quote.json();
    return {
      props: { data },
      revalidate: 20,
    };
  } catch (error) {
    console.log(error);
  }
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=1
