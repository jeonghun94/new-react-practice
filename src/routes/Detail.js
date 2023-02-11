import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { apiUrl } from "../url";

const Detail = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  const getDetail = async () => {
    const json = await (await fetch(apiUrl.detail(id))).json();
    setResults(json.data.results);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Layout>
      <div>
        {results &&
          results.map((result) => (
            <div key={result.id}>
              <h1>{result.name}</h1>
              <img
                style={{ width: "100px", height: "100px" }}
                src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                alt={result.name}
              />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Detail;
