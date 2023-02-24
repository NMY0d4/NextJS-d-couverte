import React from "react";

export default function contact({ data }) {
    return (
        <div>
            <h1>{data.content}</h1>
        </div>
    );
}

export async function getStaticProps() {
    const quote = await fetch("https://api.quotable.io/random");
    const data = await quote.json();
    return {
        props: { data },
        revalidate: 20,
    };
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=1
