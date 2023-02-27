import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

function index({ listes }) {
  return (
    <div className="container">
      <h1 className="text-center my-5">Les listes de Vocabulaire</h1>
      <ul className="list-group" style={{ width: "20%", margin: "0 auto" }}>
        {listes.map((cat) => {
          return (
            <li key={uuidv4()} className="text-center list-group-item">
              <Link href={`/listes/${Object.keys(cat)[0]}`}>
                {Object.keys(cat)[0]}
              </Link>
            </li>
          );
        })}
      </ul>
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
